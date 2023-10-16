'use strict'

//My version without delegation

// let tabs = document.querySelectorAll(".tabs__tab");
// let content = document.querySelectorAll(".tabs__content");

// let activeTab = document.querySelector('.tabs__tab_active');
// let activeContent = document.querySelector('.tabs__content_active');

// tabs.forEach( (item, index) => {
//     item.addEventListener('click', () => {
//         if (!item.classList.contains('tabs__tab_active')) {

//             activeTab.classList.remove('tabs__tab_active');
//             activeContent.classList.remove('tabs__content_active');

//             item.classList.add('tabs__tab_active');
//             content[index].classList.add('tabs__content_active');

//             activeTab = item;
//             activeContent = content[index];
//         }
//     })
// })






// Version from lesson
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs__tab'),
        control = document.querySelector('.tabs__control'),
        content = document.querySelectorAll('.tabs__content');

    function hideContent() {
        tabs.forEach( item => {
            item.classList.remove('tabs__tab_active');
        });

        content.forEach( item => {
            item.classList.remove('tabs__content_active');
        })
    }

    function showContent(i = 0) {
        tabs[i].classList.add('tabs__tab_active');
        content[i].classList.add('tabs__content_active');
    }

    hideContent();
    showContent();

    control.addEventListener('click', (e) => {
        let target = e.target;

        if( target && target.matches('.tabs__tab')) {
            if (target.classList.contains('tabs__tab_active')) return;
            tabs.forEach( (item, index) => {
                if (target == item) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    })

})