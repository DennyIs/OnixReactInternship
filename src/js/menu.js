window.onscroll = function showHeader() {
    var header = document.querySelector('.heading');
    if(window.pageYOffset > 1000){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}