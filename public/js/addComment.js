const addComment = async (event) => {
    let commentBtn = event.target;
    let blogId = commentBtn.dataset.id;
    let commentContent = document.querySelector('#commentContent').value.trim();

    const response = await fetch('/api/comment/' , {
        method: 'POST',
        body: JSON.stringify({ content: commentContent, blog_id: blogId }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Comment could not be posted!');
    }
}
document.querySelector('#commentBtn').addEventListener('click', addComment);