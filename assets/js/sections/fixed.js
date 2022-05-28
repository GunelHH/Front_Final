// fixed

const fixed = document.querySelector(".scroll-top");

fixed.addEventListener("click", (e) => {
  window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });

  e.preventDefault();
});
