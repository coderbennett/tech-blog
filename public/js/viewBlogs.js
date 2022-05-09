const buttons = document.querySelectorAll('.viewBlog');

buttons.forEach(button => {
    button.addEventListener('click', redirectBlog);
})

function redirectBlog(event) {
    let blogBtn = event.target;
    let blogId = blogBtn.dataset.id;
    document.location.replace('/blog/' + blogId);
};
