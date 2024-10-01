function loadPosts() {
    // console.log('Loading posts data');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}

function displayPosts(posts) {
    // console.log(posts);
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        console.log(post);
        const article = document.createElement('article');
        article.classList.add('post');
        article.innerHTML = `
            <h4>User Id - ${post.userId}</h4>
            <h5>Post Title- ${post.title} </h5>
            <p>Post Description${post.body} </p>
        `
        postsContainer.appendChild(article);
    }
}

loadPosts();

