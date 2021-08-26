let navBottom = document.querySelector('.bottom-nav')
let lastScrollTop = 0;
navBottom.style.bottom = "300px !important";

window.addEventListener("scroll" , function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("AAAAAAAAAA")
    if(scrollTop > lastScrollTop){
        navBottom.style.bottom = "300px !important";
    }
    else{
        navBottom.style.bottom = "0px !important";
    }
})