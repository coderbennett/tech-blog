function redirectEditBlog(event) {
    let editBtn = event.target;
    let blogId = editBtn.dataset.id;
    document.location.replace('/blog/' + blogId + '/edit');
};

document.querySelector('#updateBlogBtn').addEventListener('click', redirectEditBlog);