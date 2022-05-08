function redirectBlog(event) {
    let blogBtn = event.target;
    let blogId = blogBtn.dataset.id;
    document.location.replace('/blog/' + blogId);
};

document.querySelector('.viewBlog').addEventListener('click', redirectBlog);