// quick view

const closeQuick = document.querySelector(".x-icon");
const quickViewIcons = document.querySelectorAll(".product__icons__quickview");
const quickView = document.querySelector(".product-quick-view ");
quickViewIcons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    quickView.style.display = "block";
  });
});
closeQuick.addEventListener("click", (e) => {
  e.preventDefault();
  quickView.style.display = "none";
});
