
document.addEventListener("touchstart", (e) => {
    window.startX = e.touches[0].clientX;
    window.startY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchmove", (e) => {
    let dx = e.touches[0].clientX - window.startX;
    let dy = e.touches[0].clientY - window.startY;

    // only block horizontal swipe (important)
    if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault();
    }
}, { passive: false });function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

/* NAVIGATION (you already had placeholders) */
function openCart() {
    window.location.href = "cart.html";
}

function goCart() {
    window.location.href = "cart.html";
}

function goAccount() {
    window.location.href = "account.html";
}
function goWishlist() {
    window.location.href = "wishlist.html";
}

function goOrders() {
    window.location.href = "orders.html";
}

function logout() {

    const confirmLogout = confirm("Are you sure you want to log out?");

    if (confirmLogout) {

        localStorage.removeItem("bookVaultUser");

        window.location.href = "index.html";
    }
}

function openBook(title, image, author, rating, description, price) {

    localStorage.setItem("bookTitle", title);
    localStorage.setItem("bookImage", image);
    localStorage.setItem("bookAuthor", author);
    localStorage.setItem("bookRating", rating);
    localStorage.setItem("bookDescription", description);
    localStorage.setItem("bookPrice", price);

    window.location.href = "book.html";
}

window.addEventListener("DOMContentLoaded", () => {
    const welcome = document.getElementById("welcomeUser");

    if (welcome) {
        welcome.innerText = "Welcome to BookVault 📚";
    }
});

/* QUOTE ANIMATION - 5 seconds */
const quotes = [
    "A room without books is like a body without soul",
    "Books are mirrors of imagination",
    "One good book can change your life",
    "Reading is dreaming with open eyes",
    "Books take you to another world"
];

let i = 0;
const quoteEl = document.getElementById("quoteText");

function showQuote() {
    // start from left
    quoteEl.style.transition = "none";
    quoteEl.style.transform = "translateX(-100%)";
    quoteEl.style.opacity = "0";

    setTimeout(() => {
        quoteEl.innerText = quotes[i];

        // slide in
        quoteEl.style.transition = "transform 1s ease, opacity 1s ease";
        quoteEl.style.transform = "translateX(0)";
        quoteEl.style.opacity = "1";

        // hold, then move out
        setTimeout(() => {
            quoteEl.style.transform = "translateX(100%)";
            quoteEl.style.opacity = "0";

            i = (i + 1) % quotes.length;
        }, 3000);

    }, 200);
}

showQuote();
setInterval(showQuote, 4500);


/* ARROW SCROLL */
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".row-wrapper").forEach(wrapper => {

        const row = wrapper.querySelector(".row");
        const leftBtn = wrapper.querySelector(".scroll-btn.left");
        const rightBtn = wrapper.querySelector(".scroll-btn.right");

        if (leftBtn && row) {
            leftBtn.addEventListener("click", () => {
                row.scrollBy({
                    left: -600,
                    behavior: "smooth"
                });
            });
        }

        if (rightBtn && row) {
            rightBtn.addEventListener("click", () => {
                row.scrollBy({
                    left: 600,
                    behavior: "smooth"
                })
            });
        }

    });

});

console.log("Arrow system loaded");
const searchLeft = document.querySelector(".search-left");
const searchRight = document.querySelector(".search-right");
const searchResultsRow = document.getElementById("searchResultsRow");

if (searchLeft && searchRight) {

    searchRight.addEventListener("click", () => {
        searchResultsRow.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });

    searchLeft.addEventListener("click", () => {
        searchResultsRow.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });

}
/* NETFLIX STYLE SEARCH */
document.addEventListener("DOMContentLoaded", () => {

    const searchInput =
        document.getElementById("searchInput");

    const searchSection =
        document.getElementById("searchResultsSection");

    const searchRow =
        document.getElementById("searchResultsRow");

    const searchTitle =
        document.getElementById("searchResultsTitle");

    searchInput.addEventListener("input", function () {

        const value =
            this.value.toLowerCase().trim();

        searchRow.innerHTML = "";

        if(value === ""){

            searchSection.style.display = "none";
            return;
        }

let count = 0;

const foundBooks = new Set();

document.querySelectorAll(".book-box").forEach(book => {

    const title = (book.dataset.title || "").toLowerCase();
    const author = (book.dataset.author || "").toLowerCase();
    const genre = (book.dataset.genre || "").toLowerCase();

    if (
        title.includes(value) ||
        author.includes(value) ||
        genre.includes(value)
    ) {

        const uniqueKey = title + author;

        if (!foundBooks.has(uniqueKey)) {

            foundBooks.add(uniqueKey);

            const clone = book.cloneNode(true);

            searchRow.appendChild(clone);

            count++;
        }
    }
});

        searchSection.style.display = "block";

        if(count > 0){

            searchTitle.innerHTML =
                `📚 Search Results (${count})`;

        }else{

            searchTitle.innerHTML =
                "❌ No Books Found";
        }

    });

});

  


function goAccount() {
    window.location.href = "account.html";
}

console.log("JS Loaded");
let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener("touchmove", (e) => {
    const moveX = e.touches[0].clientX;

    // detect strong horizontal swipe only
    if (Math.abs(moveX - startX) > 60) {
        // STOP accidental gesture navigation
        e.stopPropagation();
    }
}, { passive: false });
