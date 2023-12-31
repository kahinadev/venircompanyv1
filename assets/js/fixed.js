window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbarlight");
var sticky = navbar.offsetTop;
var navbardark = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        navbar.classList.add("navbardark");
    } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("navbardark");
    }
} 