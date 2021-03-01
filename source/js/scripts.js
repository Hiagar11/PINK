var button = document.querySelector('.navigation__toggle');
button.addEventListener('click', close_open);
function open_close(eve) {
    if (eve.target.tagName === 'BUTTON' && eve.target.parentElement.classList.contains('navigation--opened')) {
        eve.target.parentElement.classList.remove('navigation--opened');
        eve.target.parentElement.classList.add('navigation--closed');
    }
    button.removeEventListener('click', open_close);
    button.addEventListener('click', close_open);
}
function close_open(eve) {
    if (eve.target.tagName === 'BUTTON' && eve.target.parentElement.classList.contains('navigation--closed')) {
        eve.target.parentElement.classList.remove('navigation--closed');
        eve.target.parentElement.classList.add('navigation--opened');
    }
    button.removeEventListener('click', close_open);
    button.addEventListener('click', open_close);
}