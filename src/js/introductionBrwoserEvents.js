'use strict';

let button = document.createElement('div');
button.textContent = 'Press me';
button.style.cssText = 'width: 200px; high: 200px; font-size: 15px; border: solid 1px black; cursor: pointer';
document.querySelector('ul').after(button);
button.onclick = function() {
    // button.hidden = true;
    button.setAttribute('hidden', '');
}

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
})