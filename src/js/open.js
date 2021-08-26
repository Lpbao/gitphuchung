const menuBtn = document.querySelector('.nav-menu');
const navPage = document.querySelector('.nav-page');
const navPageItem = document.querySelectorAll('.nav-page-item')

let isOpen = false

function openToggle(){
    if(isOpen){
        navPage.classList.remove('open');
        menuBtn.classList.remove('open');
        navPageItem.forEach(navItem => {
            navItem.classList.remove('open');
        })

        isOpen = false;
    }
    else{
        navPage.classList.add('open');
        menuBtn.classList.add('open');
        navPageItem.forEach(navItem => {
            navItem.classList.add('open');
        })
    
        isOpen = true
    }
}

menuBtn.addEventListener('click' , openToggle);