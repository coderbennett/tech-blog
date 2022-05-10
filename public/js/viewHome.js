const homeBtn = document.querySelector('#homeBtn');
const techBlogBtn = document.querySelector('#techBlogBtn');

homeBtn.addEventListener('click', redirectHome);
techBlogBtn.addEventListener('click', redirectHome);

function redirectHome() {
    document.location.replace('/');
};