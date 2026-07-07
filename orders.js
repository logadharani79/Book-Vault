let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("orders");

if (orders.length === 0) {
  container.innerHTML = "<p>No orders placed yet.</p>";
}

orders.forEach((o, index) => {
  container.innerHTML += `
    <div class="order">
      <img src="${o.image}" width="80">

      <h4>${o.title}</h4>

      <p>₹${o.price}</p>

      <p>${o.address}</p>

      <button onclick="removeOrder(${index})">
        🗑 Remove Order
      </button>
    </div>
  `;
});

function removeOrder(index) {

  if(confirm("Remove this order?")) {

    let orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.splice(index, 1);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    location.reload();
  }
}
function toggleProfileMenu(){
  const menu = document.getElementById("profileMenu");
  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
}

function goAccount(){
  window.location.href = "account.html";
}

function goOrders(){
  window.location.href = "orders.html";
}

function logout(){
  localStorage.removeItem("bookVaultUser");
  window.location.href = "index.html";
}