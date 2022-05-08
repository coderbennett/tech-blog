function redirectLogin() {
    document.location.replace('/login');
};

document.querySelector('#loginBtn').addEventListener('click', redirectLogin);