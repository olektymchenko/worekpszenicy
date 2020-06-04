//Get navbar height
let headerNavbar = document.getElementsByClassName("navbar-editing")[0];
let headerNavbarHeight = headerNavbar.offsetHeight;

// Get socialIcons lenght
let sosialIcons = document.getElementsByClassName("cosialIcons")[0];
let sosialIconsHeight = sosialIcons.offsetHeight;

let headerImage = document.getElementsByClassName("header__image")[0];
headerImage.style.height = `calc(100vh-${headerNavbarHeight}px-${sosialIconsHeight}px)`;

