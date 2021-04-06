const API = " http://localhost:8000/posts";
renderPosts();

$(".add-btn").on("click", function () {
    let newPosts = {
        title: $(".userName").val(),
        image: $(".image").val(),
        description: $(".description").val(),
      
    };

    fetch(API, {
        method: "POST",
        body: JSON.stringify(newPosts),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(() => renderPosts());
});

function renderPosts() {
    fetch(API)
        .then((res) => res.json())
        .then((postsData) => {
            $(".posts-block").html("");
            postsData.forEach((item) => {
                $(".posts-block").append(`
                 <div class="card" style="width: 70%; border-radius: 5%;  ">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title">${item.title}</h5>
                       <p class="card-text">${item.description}</p>
                       <a href="#" class="edit-btn btn btn-primary">like</a>
                       <button id="${item.id} class="delete">Delete</button>
                 </div>
             </div>
                 `);

                // $(#${item.id}).on("click", function () {
                //     fetch(API + "/" + item.id, {
                //         method: "DELETE",
                //     }).then(() => renderPosts());
                // });
            });
        });
}
// $("body").on("click", ".delete", function (e) {
//     let id = e.target.id;
//     fetch(`${API}/${id}/`, {
//         method: "DELETE",
//     }).then(() => renderPosts());
// });
$("body").on("click", ".delete", function (e) {
    let id = e.target.id;
    fetch(`${API}/${id}/`, {
        method: "DELETE",
    }).then(() => render());
})