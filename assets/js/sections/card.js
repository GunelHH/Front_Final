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

function addBasketMini() {
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  const basket = document.querySelector(".basket__top");
  document.getElementById("count").innerText = items.length;

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
addBasketMini();

function AddBasketMain() {
  const items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];

  const basketPage = document.querySelector(".tbody");
  console.log(basketPage);
  if (items.length > 0) {
    items.forEach((item) => {
      basketPage.insertAdjacentHTML(
        "afterbegin",
        `<tr>
              <td>
                <img src="${item.item.img}" alt="" />
              </td>
              <td>${item.item.title}</td>
              <td>${item.item.price}</td>
              <td>
                <div class="increase">
                  <span class="minus">-</span><span class="cl">1</span><span  class="plus">+</span>
                </div>
              </td>
              <td class="total">$80.00</td>
              <td class="remove"><i class="fa-regular fa-trash-can"></i></td>
            </tr>`
      );
    });
  }
}
AddBasketMain();
