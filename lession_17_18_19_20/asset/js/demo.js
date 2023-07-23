window.onload = function(event) {
    let hamburger = document.querySelector(".hamburger");
    let tabLeft = document.querySelector(".tab-left");
    let tabLeftMask = document.querySelector(".tab-left-mask");

    hamburger.addEventListener('click', function(event) {
        this.classList.toggle('active');
        tabLeft.classList.add('active');
    })

    tabLeftMask.addEventListener('click', function(event) {
        hamburger.classList.remove('active');
        tabLeft.classList.remove('active');
    })
}