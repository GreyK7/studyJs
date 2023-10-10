'use strict';

//Exercise 1 Получите атрибут <div data-widget-name="menu">Choose the genre</div>

const div = document.createElement('div');
const hi = document.querySelector('.hi');

hi.after(div);

div.dataset.widgetName = 'menu';

console.log(div.dataset.widgetName);



//Exercise 2 Сделайте внешние ссылки оранжевыми

const links = document.querySelectorAll('a');

links.forEach( item => {
    let temp;
    if (item.hasAttribute('href')) { 
        temp = item.getAttribute('href');
        if ( !temp.startsWith('http://internal.com') && temp.includes('://')) {
            item.style.color = 'orange';
        }
    }
});