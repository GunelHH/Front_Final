$("#product-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1.3,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX);
  e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageX);
  x = (offsetX / zoomer.offsetWidth) * 100;
  y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

const desc = document.querySelector("#description");
const inform = document.querySelector("#information");
const reviews = document.querySelector("#reviews");
const descPage = document.querySelector(".product-change-pages__description");
const informPage = document.querySelector(".product-change-pages__information");
const reviewsPage = document.querySelector(".product-change-pages__reviews");

desc.addEventListener("click", (e) => {
  e.preventDefault();
  descPage.style.display = "block";
  informPage.style.display = "none";
  reviewsPage.style.display = "none";
});
inform.addEventListener("click", (e) => {
  e.preventDefault();
  descPage.style.display = "none";
  informPage.style.display = "block";
  reviewsPage.style.display = "none";
});
reviews.addEventListener("click", (e) => {
  e.preventDefault();
  descPage.style.display = "none";
  informPage.style.display = "none";
  reviewsPage.style.display = "block";
});

//
const minus = document.querySelector("#minus");
const input = document.querySelector("#input");
const plus = document.querySelector("#plus");

minus.addEventListener("click", () => {
  input.value--;
  if (input.value < 0) {
    input.value = 0;
  }
});
plus.addEventListener("click", () => {
  input.value++;
});

// replacing-images

const mainImage = document.querySelector(".zoom");

console.log(mainImage.firstChild.nextSibling);

const images = document.querySelectorAll(
  ".products-details__other-products__product"
);

images.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.firstChild.nextSibling.src);
    mainImage.firstChild.nextSibling.src = element.firstChild.nextSibling.src;
    mainImage.style.backgroundImage = `url(${element.firstChild.nextSibling.src})`;
    mainImage.style.backgroundRepeat = "no-repeat";
    mainImage.style.backgroundSize = "450px 450px";
  });
});
