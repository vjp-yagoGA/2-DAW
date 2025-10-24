fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        function crearPost(post) {
            let div = document.createElement("div");
            div.classList.add("entrada");
            div.innerHTML = `
                <p><strong>TITULO</strong>: ${post.title}</p>
                <div>
                    <p><strong>Contenido</strong>: ${post.body}</p>
                    <button class="mostrarUsuario">Usuario del Post</button>
                    <button class="mostrarComentarios">Mostrar comentarios</button>
                    <div class="usuario d-none">
                        <p><strong>NOMBRE USUARIO: </strong> <span id="nombreUser${post.id}"></span></p>
                    </div>
                    <div class="comentarios d-none">
                        <p><strong>Comentarios: </strong></p>
                    </div>
                </div>
            `;

            div.querySelector(".mostrarUsuario").addEventListener("click", function () {
                let usuarioDiv = div.querySelector(".usuario");
                if (usuarioDiv.classList.contains("d-none")) {
                    cargarUsuario(post.userId, div, post.id);
                }
                usuarioDiv.classList.toggle("d-none");
            });

            div.querySelector(".mostrarComentarios").addEventListener("click", function () {
                let comentariosDiv = div.querySelector(".comentarios");
                if (comentariosDiv.classList.contains("d-none")) {
                    cargarComentarios(post.id, div);
                }
                comentariosDiv.classList.toggle("d-none");
            });

            document.getElementById("entradas").appendChild(div);
        }

        function cargarUsuario(userId, div, postId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then(data => {
                    div.querySelector(`#nombreUser${postId}`).textContent = data.name;
                })
                .catch(error => console.error("Error al cargar usuario:", error));
        }

        function cargarComentarios(postId, div) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => response.json())
                .then(data => {
                    let comentariosDiv = div.querySelector(".comentarios");
                    comentariosDiv.innerHTML = "<p><strong>Comentarios: </strong></p>";
                    data.forEach(comentario => {
                        let p = document.createElement("p");
                        p.textContent = `- ${comentario.name}`;
                        comentariosDiv.appendChild(p);
                    });
                })
                .catch(error => console.error("Error al cargar comentarios:", error));
        }

        posts.forEach(post => crearPost(post));
    })
    .catch(error => console.error("Error al cargar posts:", error));