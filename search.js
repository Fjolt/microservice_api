function search_by_post_id(){
    var PostId = document.getElementById('PostId').value;
    alert(PostId);
    let to_get = {"id": parseInt(PostId)};
    alert(JSON.stringify(to_get));
    let data = fetch('http://127.0.0.1:5000/posts?id=1');
    alert(data.json());
}


function search_by_user_id(){
    alert(5 + 5);
}