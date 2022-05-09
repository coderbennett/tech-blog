const deleteBlogPost = async (event) => {
    let deleteBtn = event.target;
    let blogId = deleteBtn.dataset.id;
    const response = await fetch('/api/blog/' + blogId, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blog.');
    }
};

document.querySelector('#deleteBlogBtn').addEventListener('click', deleteBlogPost);