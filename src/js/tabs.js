'use strict'

//My version without delegation

let tabs = document.querySelectorAll(".tabs__tab");
let content = document.querySelectorAll(".tabs__content");

let activeTab = document.querySelector('.tabs__tab_active');
let activeContent = document.querySelector('.tabs__content_active');

tabs.forEach( (item, index) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('tabs__tab_active')) {

            activeTab.classList.remove('tabs__tab_active');
            activeContent.classList.remove('tabs__content_active');

            item.classList.add('tabs__tab_active');
            content[index].classList.add('tabs__content_active');

            activeTab = item;
            activeContent = content[index];
        }
    })
})