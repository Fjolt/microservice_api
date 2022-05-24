from flask import Flask
from flask_restful import Api, Resource, fields, marshal_with, abort
from flask_sqlalchemy import SQLAlchemy
import requests
from messages import messages
from parsers import entry_post, post_update, post_find, post_delete


app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class PostModel(db.Model):
    '''
    Model prispevkov
    Formát prispevku: id, userId, title, body
    '''
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f"Post(id ={self.id}, userId ={self.userId}, title ={self.title}, body ={self.body})"


# format vratenej hodnoty po zavolani metod triedy Post
resource_fields = {
    'id': fields.Integer,
    'userId': fields.Integer,
    'title': fields.String,
    'body': fields.String
}


class Post(Resource):
    @marshal_with(resource_fields)
    def get(self):
        '''
        - Zobrazenie príspevku
            - na základe id alebo userId
            - ak sa príspevok nenájde v systéme, je potrebné ho dohľadať pomocou externej API a uložiť
            (platné iba pre vyhľadávanie pomocou id príspevku)
        '''
        args = post_find.parse_args()
        post_id = args["id"]
        userId = args["userId"]
        if post_id == None and userId == None:
            abort(404, message=messages["404 post"])

        if post_id is not None:
            result = PostModel.query.filter_by(id=post_id).first()
            if not result:
                result = requests.get("https://jsonplaceholder.typicode.com/posts", {"id": post_id})
                if not result:
                    abort(404, message=messages["404 post"])
                result2 = result.json()[0]
                print(result2)
                post = PostModel(id=result2["id"], userId=result2["userId"], title=result2["title"], body=result2["body"])
                db.session.add(post)
                db.session.commit()
                return post, 200
            return result, 200

        if userId is not None:
            result = PostModel.query.filter_by(userId=userId).all()
            if not result:
                abort(404, message=messages["404 post"])
            return result, 200

    @marshal_with(resource_fields)
    def post(self):
        '''
        - Pridanie príspevku - potrebné validovať userId pomocou externej API
        '''

        args = entry_post.parse_args()

        result = PostModel.query.filter_by(id=args["id"]).first()
        if result:
            abort(409, message=messages["409"])

        user_exist = requests.get("https://jsonplaceholder.typicode.com/users", {"id": args["userId"]})
        if not user_exist:
            abort(404, message=messages["404 user"])

        post = PostModel(id=args["id"], userId=args["userId"], title=args["title"], body=args["body"])
        db.session.add(post)
        db.session.commit()
        return post, 201

    @marshal_with(resource_fields)
    def patch(self):
        '''
        - Upravenie príspevku - možnosť meniť title a body
        '''
        args = post_update.parse_args()

        result = PostModel.query.filter_by(id=args["id"]).first()
        if not result:
            abort(404, message=messages["404 post"])

        if args["userId"] == result.userId:
            if args["title"]:
                result.title = args["title"]
            if args["body"]:
                result.body = args["body"]

        db.session.commit()

        return result, 200

    def delete(self):
        '''
        - Odstránenie príspevku
        '''
        args = post_delete.parse_args()

        result = PostModel.query.filter_by(id=args["id"]).first()
        if not result:
            abort(404, message=messages["404 post"])

        if result.userId == args["userId"]:
            PostModel.query.filter_by(id=args["id"], userId=args["userId"]).delete()
            db.session.commit()
        else:
            abort(401, message=messages["401"])
        return "POST WAS DELETED", 200


api.add_resource(Post, '/posts')


if __name__ == '__main__':
    app.run(debug=True)
