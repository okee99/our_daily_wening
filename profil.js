
let userPostsData = [
    {
        image: "./po.webp",
        caption: "Day 1 menjadi actor sangat melelahkan... #mugkinbelumterbiasa",
        likes: 3251
    },
    {
        image: "./pooo.webp",
        caption: "Keren juga hasil jepretan wartawan",
        likes: 32654
    }

];

function renderUserPosts() {
    const userPostsContainer = document.getElementById("userPosts");

    userPostsContainer.innerHTML = ''; 

    userPostsData.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <img src="${post.image}" alt="Post Image">
            <p>${post.caption}</p>
            <p>Likes: ${post.likes}</p>
        `;

        userPostsContainer.appendChild(postElement);
    });
}


window.onload = function() {
    renderUserPosts();
    
    
    const addPhotoButton = document.getElementById("addPhotoButton");
    addPhotoButton.addEventListener("click", handleAddPhoto);
};


function handleAddPhoto() {
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    if (file) {
       
        const newPost = {
            image: URL.createObjectURL(file),
            caption: "New photo added",
            likes: 0
        };
        userPostsData.push(newPost);

        renderUserPosts();
    }
}
