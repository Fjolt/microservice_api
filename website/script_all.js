let promise = fetch('http://127.0.0.1:5000/posts');
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
                <p>User id: ${post.userId}<p>
                <p>Post id: ${post.id}<p><br>
                <p>${post.body}</p>
                </div>
            `;
        }).join("");
        document.querySelector('#posts').insertAdjacentHTML('afterbegin', to_html);
    })
