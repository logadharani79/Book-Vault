let cart = JSON.parse(localStorage.getItem("cart")) || [];

// NAV
function goHome() {
  window.location.href = "home.html";
}

function goWishlist() {
  window.location.href = "wishlist.html";
}

function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");

    menu.style.display =
        menu.style.display === "block"
        ? "none"
        : "block";
}

function goAccount() {
    window.location.href = "account.html";
}

function goOrders() {
    window.location.href = "orders.html";
}

function logout() {
    localStorage.removeItem("bookVaultUser");
    window.location.href = "index.html";
}
// RENDER CART
function renderCart() {
  let container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    total += Number(item.price) * item.qty;

    container.innerHTML += `
      <div class="cart-card">

        <!-- BOOK IMAGE -->
        <img src="${item.image}" class="cart-img">

        <!-- DETAILS -->
        <div class="cart-details">

          <h2>${item.title}</h2>

          <p>₹${item.price}</p>

          <!-- QTY -->
          <div class="qty">
            <button onclick="dec(${index})">-</button>
            ${item.qty}
            <button onclick="inc(${index})">+</button>
          </div>

          <!-- BUTTONS (like wishlist style) -->
          <div class="button-group">

            <button onclick="moveWishlist(${index})">
              ❤️ Wishlist
            </button>

            <button onclick="buyNow(${index})">
              ⚡ Buy Now
            </button>

            <button onclick="removeItem(${index})">
              🗑 Remove
            </button>

          </div>

        </div>

      </div>
    `;
  });

  document.getElementById("grandTotal").innerText =
    "Grand Total: ₹" + total;
}

// INCREASE
function inc(i) {
  cart[i].qty++;
  save();
}

// DECREASE
function dec(i) {
  if (cart[i].qty > 1) cart[i].qty--;
  save();
}

// REMOVE
function removeItem(i) {
  cart.splice(i, 1);
  save();
}

// MOVE TO WISHLIST
function moveWishlist(i) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  wishlist.push({
    title: cart[i].title,
    image: cart[i].image,
    author: cart[i].author,
    price: cart[i].price
});
  cart.splice(i, 1);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  save();
}

// BUY NOW (next step page)
function buyNow(i) {
  localStorage.setItem("checkoutItem", JSON.stringify(cart[i]));
  window.location.href = "buy.html";
}

// SAVE CART
function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
