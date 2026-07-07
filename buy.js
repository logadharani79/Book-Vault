let item = JSON.parse(localStorage.getItem("checkoutItem"));
console.log(item);
const usdPrice = (item.price / 86).toFixed(2);

document.getElementById("product").innerHTML = `
  <img src="${item.image}" width="150">
  <h3>${item.title}</h3>
  <p>₹${item.price}</p>
  <p>$${usdPrice}</p>
`;
function payNow() {
  let confirmPay = confirm("Confirm Transaction?");
  if (!confirmPay) return;

  let order = {
    ...item,
    address: document.getElementById("address").value,
    id: Date.now()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);

  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Payment Successful ✅");
  window.location.href = "orders.html";
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
