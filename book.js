document.getElementById("bookTitle").innerText =
    localStorage.getItem("bookTitle") || "Unknown Book";

document.getElementById("bookImage").src =
    localStorage.getItem("bookImage") || "";

document.getElementById("bookAuthor").innerText =
    "Author: " + (localStorage.getItem("bookAuthor") || "Unknown");

document.getElementById("bookRating").innerText =
    "⭐ " + (localStorage.getItem("bookRating") || "No Rating");

document.getElementById("bookDescription").innerText =
    localStorage.getItem("bookDescription") || "No Description Available";

document.getElementById("bookPrice").innerText =
    "₹" + (localStorage.getItem("bookPrice") || "0");

function addWishlist(){

    let wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

    const title =
    localStorage.getItem("bookTitle");

    const alreadyExists =
    wishlist.some(book => book.title === title);

    if(alreadyExists){

        alert("❤️ This book is already in your Wishlist");

        return;
    }

    wishlist.push({

        title:
        localStorage.getItem("bookTitle"),

        image:
        localStorage.getItem("bookImage"),

        author:
        localStorage.getItem("bookAuthor"),

        price:
        localStorage.getItem("bookPrice")

    });

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("❤️ Book Added To Wishlist");
}
function addCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const title = localStorage.getItem("bookTitle");

    let exists = cart.some(book => book.title === title);

    if(exists){
        alert("🛒 This book is already in cart");
        return;
    }

    cart.push({
        title: localStorage.getItem("bookTitle"),
        image: localStorage.getItem("bookImage"),
        author: localStorage.getItem("bookAuthor"),
        price: Number(localStorage.getItem("bookPrice")),
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("🛒 Book Added To Cart");
}

function buyNow(){

    const book = {

        title: localStorage.getItem("bookTitle"),

        image: localStorage.getItem("bookImage"),

        author: localStorage.getItem("bookAuthor"),

        price: localStorage.getItem("bookPrice")

    };

    localStorage.setItem(
        "checkoutItem",
        JSON.stringify(book)
    );

    window.location.href = "buy.html";
}
function toggleProfileMenu(){

    const menu =
    document.getElementById("profileMenu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";
    }
}

function goAccount(){

    window.location.href = "account.html";
}

function goOrders(){

    alert("Orders Page Coming Soon");
}

function logout(){

    alert("Logged Out Successfully");

    window.location.href = "index.html";
}
function addToCart() {
  let book = JSON.parse(localStorage.getItem("selectedBook"));

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(b => b.title === book.title);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      title: book.title,
      price: book.price,
      qty: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart 🛒");
}