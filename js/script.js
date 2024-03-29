// toggle class active untuk hamburger menu

const navbarnav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toggle class active untuk shopping cart

const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik di luar element

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box

const ItemDetailModal = document.querySelector("#item-detail-modal");
const ItemDetailButtons = document.querySelectorAll(".item-detail-button");

ItemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    ItemDetailModal.style.display = "flex";

    e.preventDefault();
  };
});

// klik tombol X

document.querySelector(".modal .close-icon").onclick = (e) => {
  ItemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik luar modal X hilang

const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

//klik all di luar modal

window.onclick = (e) => {
  if (e.target === ItemDetailModal) {
    ItemDetailModal.style.display = "none";
  }
};
