window.addEventListener("scroll", function(){
 const header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 0);
});

function toogleMenu() {
const menuToogle = document.querySelector(".menuToogle");
const navigation = document.querySelector(".navigation");
menuToogle.classList.toggle("active");
navigation.classList.toggle("active");
}