const headerLoginBtn = document.getElementById("sc-login");

headerLoginBtn?.addEventListener("click", () => {
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

// const loggedInUserBtn = document.querySelector(".btn-logged-in-user");
// const dropDownMenu = document.querySelector(".sm-header-nav-user-dropdown");
// loggedInUserBtn?.addEventListener("click",()=>{
//   dropDownMenu.classList.contains("user-show-dropdown-hide")
//   ? dropDownMenu.classList.remove("user-show-dropdown-hide")
//   : dropDownMenu.classList.add("user-show-dropdown-hide")

// })

const headerLogoutBtn = document.getElementById("sc-logout");

headerLogoutBtn?.addEventListener("click", () => {
  window.location = "/lib/components/auth/auth.html";
});
