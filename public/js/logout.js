const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json'}
    });

    if(response.ok) {
        document.location.replace('/login');
    } else {
        alert('Logout failed!');
    }
};

document.querySelector('').addEventListener('click', logout);