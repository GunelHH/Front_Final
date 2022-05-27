const addToCard = document.querySelectorAll(".product__icons__addtocard");
addToCard.forEach((element) => {
  element.addEventListener("click", () => {});
});

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
