function redirectNewBlog() {
    document.location.replace('/newblog');
};

document.querySelector('.blogPost').addEventListener('click', redirectNewBlog);