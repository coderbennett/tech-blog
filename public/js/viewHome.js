const buttons = document.querySelectorAll('.homeBtn');

buttons.forEach(button => {
    button.addEventListener('click', redirectHome);
})

function redirectHome() {
    document.location.replace('/');
};