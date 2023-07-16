const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)

function checkWindowSize() {
    if (window.innerWidth >= 768) {
        nav.classList.add('hidden');
        btn.classList.remove('open');
        document.body.classList.remove('no-scroll');
    } else {
        nav.style.display = 'block';
    }
}

window.addEventListener('resize', checkWindowSize);
// Call the function on initial page load to set the initial state.
checkWindowSize();

function hideNavOnClickOutside(event) {
    const navbar = document.querySelector('.navigation-bar')
    if (!nav.contains(event.target) && !btn.contains(event.target) && !navbar.contains(event.target)) {
        nav.classList.add('hidden');
        btn.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }
}
document.addEventListener('click', hideNavOnClickOutside);
