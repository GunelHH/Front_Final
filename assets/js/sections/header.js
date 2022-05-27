let nav = document.querySelector(".main-nav");
console.log(nav);
document.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    nav.style.position = "fixed";
    nav.style.backgroundColor = "white";
    nav.style.top = 0;
    nav.style.paddingLeft = "50px";
    nav.style.paddingRight = "50px";
    nav.style.height = 0;
    nav.style.left = 0;
    nav.style.boxShadow = "0px 0px 20px #e3a51e";
  } else {
    nav.style.position = "relative";
    nav.style.backgroundColor = "white";
    nav.style.top = 0;
    nav.style.paddingLeft = "0px";
    nav.style.paddingRight = "0px";
    nav.style.height = " 70px";
    nav.style.left = 0;
    nav.style.boxShadow = "none";
  }
});
