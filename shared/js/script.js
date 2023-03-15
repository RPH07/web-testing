const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));
    
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}






















//const currentLocation = location.href;
//const menuItem = document.querySelectorAll('');
//const menuLength = menuItem.length
//for (let i = 0; i < menuLength; i++){
    //if(menuItem[i].href === currentLocation){
        //menuItem[i].className = "active"
    //}
//}