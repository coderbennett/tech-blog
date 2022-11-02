function redirectLogin() {
    document.location.replace('/login');
};

document.querySelector('#loginBtn').addEventListener('click', redirectLogin);

function redirectSignup() {
    document.location.replace('/signup');
};

document.querySelector('#signupBtn').addEventListener('click', redirectSignup);