const container =
document.getElementById("wishlistContainer");

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

if(wishlist.length === 0){

    container.innerHTML =
    "<h2 style='text-align:center'>No Books In Wishlist ❤️</h2>";

}else{

    wishlist.forEach((book,index)=>{

        container.innerHTML += `

        <div class="wishlist-card">

            <img src="${book.image}">

            <div class="book-details">

                <h2>${book.title}</h2>

                <p>
                    Author: ${book.author}
                </p>

                <p>
                    Price: ₹${book.price}
                </p>

                <div class="button-group">

                    <button onclick="moveToCart(${index})">
                        🛒 Move To Cart
                    </button>

                    <button onclick="buyNow(${index})">
                        ⚡ Buy Now
                    </button>

                    <button onclick="removeWishlist(${index})">
                        🗑 Remove
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    location.reload();
}

function moveToCart(index){

    let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
    title: wishlist[index].title,
    image: wishlist[index].image,
    author: wishlist[index].author,
    price: Number(wishlist[index].price),
    qty: 1
});

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    wishlist.splice(index,1);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    alert("🛒 Moved To Cart");

    location.reload();
}

function buyNow(index){

    localStorage.setItem(
        "buyNowBook",
        JSON.stringify(wishlist[index])
    );

    window.location.href =
    "buynow.html";
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
function buyNow(index){

    localStorage.setItem(
        "checkoutItem",
        JSON.stringify(wishlist[index])
    );

    window.location.href = "buy.html";
}
