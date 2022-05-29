// const addToCard = document.querySelectorAll(".product__icons__addtocard");
// addToCard.forEach((element) => {
//   element.addEventListener("click", () => {});
// });

function AddBasket(id, img, title, price) {
  let items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  if (items.length > 0) {
    if (items.some((item) => item.item.id === id)) {
      items = items.filter((item) => item.item.id !== id);
    } else {
      items.push({
        item: {
          id,
          img: `${img}`,
          title,
          price,
        },
        count: 1,
      });
    }
  } else {
    items.push({
      item: {
        id,
        img: `${img}`,
        title,
        price,
      },
      count: 1,
    });
  }
  localStorage.setItem("items", JSON.stringify(items));
}

function addBasket() {
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  const basket = document.querySelector(".basket");
  document.getElementById("count").innerText = items.length;
  // console.log(basket);
  // console.log();

  if (items.length > 0) {
    items.forEach((item) => {
      basket.insertAdjacentHTML(
        "afterbegin",
        ` <div class="basket__top__all">
              <div class="basket__top__all__image">
                <img src="${item.item.img}" alt="" />
              </div>
              <div class="basket__top__all__title">
                <p>
                  <a href="Products.html"
                    >${item.item.title}</a
                  >
                </p>
                <span>${item.item.price}</span>
              </div>
            </div>`
      );
    });
  }
}
addBasket();
