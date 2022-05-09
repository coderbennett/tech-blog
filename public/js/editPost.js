function redirectEditBlog() {
    document.location.replace('/editblog');
};

document.querySelector('.blogPost').addEventListener('click', redirectEditBlog);