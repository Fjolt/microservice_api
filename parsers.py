# uprava user requests pre jednotlive funkcie api

from flask_restful import reqparse

entry_post = reqparse.RequestParser()
entry_post.add_argument("id", type = str, help = "ID of this post", required = True)
entry_post.add_argument("userId", type = int, help = "ID of the user is required", required = True)
entry_post.add_argument("title", type = str, help = "Title of your post is required", required = True)
entry_post.add_argument("body", type = str, help = "You have not written a post", required = True)

post_update = reqparse.RequestParser()
post_update.add_argument("id", type = str, help = "ID of this post")
post_update.add_argument("userId", type = int, help = "ID of the user", required = True)
post_update.add_argument("title", type = str, help = "Title of this post")
post_update.add_argument("body", type = str, help = "Body of this post")

post_find = reqparse.RequestParser()
post_find.add_argument("id", type = str, help = "ID of this post")
post_find.add_argument("userId", type = int, help = "ID of the user")

post_delete = reqparse.RequestParser()
post_delete.add_argument("id", type = str, help = "ID of this post")
post_delete.add_argument("userId", type = int, help = "Please enter your ID", required = True)