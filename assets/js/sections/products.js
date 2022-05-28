const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Select

const selectButton = document.querySelector(".selection__select");
const selectItems = document.querySelector(".selection__items");
const selectItem = document.querySelectorAll(".selection__items__item ");
selectButton.addEventListener("click", () => {
  if (selectItems.classList.contains("active-select")) {
    selectItems.classList.remove("active-select");
    selectButton.lastElementChild.style.transform = "rotate(0deg)";
  } else {
    selectItems.classList.add("active-select");
    selectButton.lastElementChild.style.transform = "rotate(-180deg)";
  }
  if (
    selectItem.forEach((e) => {
      e.addEventListener("click", () => {
        selectButton.innerHTML = e.innerHTML;
      });
    })
  ) {
  }
});

selectButton.toggle;

// Change pages
const leftButton = document.querySelector(".change-icons__icon--left");
const rightButton = document.querySelector(".change-icons__icon--right");

const cardsColumn = document.querySelector(".cards-first");
const cardsList = document.querySelector(".cards-second");

rightButton.addEventListener("click", () => {
  cardsColumn.classList.remove("act");
  cardsList.classList.add("act");
  cardsList.classList.add("animationleft");
  rightButton.classList.add("active");
  leftButton.classList.remove("active");
});
leftButton.addEventListener("click", () => {
  cardsList.classList.remove("act");
  cardsColumn.classList.add("act");
  leftButton.classList.add("active");
  rightButton.classList.remove("active");
});
