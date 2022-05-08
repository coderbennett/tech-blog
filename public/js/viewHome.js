function redirectHome() {
    document.location.replace('/');
};

document.querySelector('#homeBtn').addEventListener('click', redirectHome);