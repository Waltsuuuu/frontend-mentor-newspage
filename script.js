const hamMenuClosed = document.getElementById('hamburgerClosed');
const hamMenuOpen = document.getElementById('hamburgerOpen');

const offScreenMenu = document.querySelector('.off-screen-menu');
const overlay = document.getElementById('overlay');


hamMenuClosed.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

hamMenuOpen.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});


