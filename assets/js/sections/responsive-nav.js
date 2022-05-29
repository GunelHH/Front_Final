const xIcon = document.querySelector(".x-elements");
const xElement = document.querySelector("#xhome");
const xLeft = document.querySelector(".x-left");

xIcon.addEventListener("click", () => {
  xLeft.style.transform = " rotate(0deg)";
  xElement.style.display = "block";

  //   if ((xElement.style.display = "block" && xElement.clicked == true)) {
  //     xLeft.style.transform = " rotate(270deg)";
  //     xElement.style.display = "none";
  //   }
});
const mobileLinks = document.querySelector(
  ".main-nav__mobile__icons>ul>li:last-of-type"
);
const navClose = document.querySelector(".nav-close");
const navResp = document.querySelector(".nav-responsive");
mobileLinks.addEventListener("click", (e) => {
  e.preventDefault();
  navResp.style.transform = "translate(0)";
});
navClose.addEventListener("click", () => {
  navResp.style.transform = "translate(-115%)";
});

// search

const searchClose = document.querySelector(".main-search__close-button");
const searchPage = document.querySelector(".main-search-m");
const searchIcon = document.querySelector("#search");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchPage.style.display = "block";
});

searchClose.addEventListener("click", () => {
  searchPage.style.display = "none";
});

// basket
const Bag = document.querySelector("#bag");
const bagPageall = document.querySelector(".basket-all");
const bagPage = document.querySelector(".basket");
const bagClose = document.querySelector(".basket-close");

Bag.addEventListener("click", (e) => {
  e.preventDefault();
  bagPageall.style.opacity = "1";
  bagPageall.style.visibility = "visible";
  bagPage.style.transform = "translate(0)";
});
bagClose.addEventListener("click", () => {
  bagPageall.style.opacity = 0;
  bagPageall.style.visibility = "hidden";
  bagPage.style.transform = "translate(110%)";
});
