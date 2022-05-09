const addNewBlog = async (event) => {
    event.preventDefault();

    let blogName = document.querySelector('#title-blog').value.trim();
    let blogContent = document.querySelector('#content-blog').value.trim();

    const response = await fetch('/api/blog/' , {
        method: 'POST',
        body: JSON.stringify({ name: blogName, content: blogContent }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Blog could not be posted!');
    }
}
document.querySelector('#submit-blog').addEventListener('click', addNewBlog);