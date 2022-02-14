const headerLoginBtn = document.getElementById("sc-login");

headerLoginBtn.addEventListener("click", () => {
  window.location = "/lib/components/auth/auth.html";
});

const cartBtn = document.getElementById("cart-btn-header");

cartBtn.addEventListener("click", () => {
  window.location = "/lib/components/cart/cart.html";
});

const wishBtn = document.getElementById("wishlist-btn-header");

wishBtn.addEventListener("click", () => {
  window.location = "/lib/components/wishlist/wishlist.html";
});