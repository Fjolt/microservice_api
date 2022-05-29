function search_by_post_id() {
    var PostId = document.getElementById('PostId').value;
    let promise = fetch('http://127.0.0.1:5000/posts?id=' + PostId);
    promise
        .then(response => {
            if (!response.ok) {
                if (response.status == 404) {
                    const to_html =
                        `
                        <div class="post">
                        <h2>404 NOT FOUND</h2><br>
                        </div>
                    `;
                    document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
                }
                throw Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            const to_html =
                `
                    <div class="post">
                    <h2>${data.title}</h2><br>
                    <p>${data.body}</p>
                    </div>
                `;
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
        })
}


function search_by_user_id() {
    var UserId = document.getElementById('UserId').value;
    let promise = fetch('http://127.0.0.1:5000/posts?userId=' + UserId);
    promise
        .then(response => {
            if (!response.ok) {
                if (response.status == 404) {
                    const to_html =
                        `
                            <div class="post">
                            <h2>404 NOT FOUND</h2><br>
                            </div>
                        `;
                    document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
                }
                throw Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            const to_html = data.map(post => {
                return `
                    <div class="post">
                    <h2>${post.title}</h2><br>
                    <p>${post.body}</p>
                    </div>
                `;
            }).join("");
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
        })
}

function enter_a_post() {
    var UserId = document.getElementById('UserId').value;
    var PostId = document.getElementById('PostId').value;
    var Title = document.getElementById('Title').value;
    var Body = document.getElementById('Body').value;
    let promise = fetch('http://127.0.0.1:5000/posts', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: PostId,
            userId: UserId,
            title: Title,
            body: Body
        })
    });
    promise
        .then(response => {
            if (!response.ok) {
                const to_html =
                    `
                        <div class="post">
                        <h2>NOT SUCCESSFUL</h2><br>
                        <p>Try a different ID or check if your ID is correct</p>
                        </div>
                    `;
                document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
                throw Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            const to_html = `
                    <div class="post">
                    <h2>IT WAS A SUCCESS!</h2>
                    <h3>${data.title}</h3><br>
                    <p>${data.body}</p>
                    </div>
                `;
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
        });
}

function update_a_post() {
    var UserId = document.getElementById('UserId').value;
    var PostId = document.getElementById('PostId').value;
    var Title = document.getElementById('Title').value;
    var Body = document.getElementById('Body').value;
    let promise = fetch('http://127.0.0.1:5000/posts', {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: PostId,
            userId: UserId,
            title: Title,
            body: Body
        })
    });
    promise
        .then(response => {
            if (!response.ok) {
                const to_html =
                    `
                    <div class="post">
                    <h2>NOT SUCCESSFUL</h2><br>
                    <p>Check if your id and the id of your post are both correct</p>
                    </div>
                    `;
                document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
                throw Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
            const to_html = `
                    <div class="post">
                    <h2>IT WAS A SUCCESS!</h2>
                    <h3>${data.title}</h3><br>
                    <p>${data.body}</p>
                    </div>
                `;
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
        });
}

function delete_a_post() {
    var UserId = document.getElementById('UserId').value;
    var PostId = document.getElementById('PostId').value;
    let promise = fetch('http://127.0.0.1:5000/posts', {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: PostId,
            userId: UserId,
        })
    });
    promise
        .then(response => {
            if (!response.ok) {
                const to_html =
                    `
                    <div class="post">
                    <h2>NOT SUCCESSFUL</h2><br>
                    <p>Check if your id and the id of your post are both correct</p>
                    </div>
                    `;
                document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
                throw Error(response.status)
            }
            return response.json()
        })
        .then(data => {
            const to_html = `
                    <div class="post">
                    <h2>IT WAS A SUCCESS!</h2>
                    </div>
                `;
            document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
        });
}
