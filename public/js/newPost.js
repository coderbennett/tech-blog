function redirectNewBlog() {
    document.location.replace('/blog/new');
};

document.querySelector('#newBlogBtn').addEventListener('click', redirectNewBlog);