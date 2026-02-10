const gifts = document.querySelectorAll(".gift-items");

gifts.forEach((gift) => {
  gift.addEventListener("click", () => {
    gift.classList.add("revealed");
  });
});
