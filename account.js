window.addEventListener("DOMContentLoaded", () => {

    const indiaBtn = document.getElementById("indiaBtn");
    const globalBtn = document.getElementById("globalBtn");

    const indiaSection = document.getElementById("indiaSection");
    const globalSection = document.getElementById("globalSection");

    /* INDIA ↔ GLOBAL TOGGLE */

    indiaBtn.addEventListener("click", () => {

        indiaBtn.classList.add("active");
        globalBtn.classList.remove("active");

        indiaSection.style.display = "block";
        globalSection.style.display = "none";

    });

    globalBtn.addEventListener("click", () => {

        globalBtn.classList.add("active");
        indiaBtn.classList.remove("active");

        indiaSection.style.display = "none";
        globalSection.style.display = "block";

    });

});

function toggleProfileMenu(event) {

    event.stopPropagation();

    const menu = document.getElementById("profileMenu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
/* INDIA CONTINUE */

function continueIndia() {

    const mobile =
        document.getElementById("mobileNumber").value.trim();

    if (mobile === "") {

        showPopup(
            "Missing Number",
            "⚠ Please enter your 10-digit mobile number."
        );

        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {

        showPopup(
            "Invalid Number",
            "⚠ Mobile number must contain exactly 10 digits."
        );

        return;
    }

}


/* INDIA ACCOUNT */

// ===================== INDIA ACCOUNT =====================

function createIndiaAccount() {

    const user = {
        username: document.getElementById("indiaName").value,
        email: document.getElementById("indiaEmail").value,
        mobile: document.getElementById("mobileNumber").value,
        address: document.getElementById("indiaAddress").value,
        country: "India",
        password: document.getElementById("indiaPassword").value
    };

    fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {

        console.log("INDIA RESPONSE:", data);

        alert("Account Created Successfully!");
        window.location.href = "home.html";

    })
    .catch(err => {
        console.log(err);
        alert("Registration Failed");
    });
}


// ===================== GLOBAL ACCOUNT =====================

function createGlobalAccount() {

    const user = {
        username: document.getElementById("globalName").value,
        email: document.getElementById("globalEmail").value,
        mobile: document.getElementById("globalMobile").value,
        address: document.getElementById("globalAddress").value,
        country: document.getElementById("globalLocation").value,
        password: document.getElementById("globalPassword").value
    };

    fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {

        console.log("GLOBAL RESPONSE:", data);

        alert("Account Created Successfully!");

        window.location.href = "home.html";

    })
    .catch(err => {
        console.log(err);
        alert("Registration Failed");
    });
}

/* POPUP FUNCTIONS */

function showPopup(title, message) {

    const popup =
        document.getElementById("popup");

    const popupTitle =
        document.getElementById("popupTitle");

    const popupMessage =
        document.getElementById("popupMessage");

    popupTitle.textContent = title;
    popupMessage.textContent = message;

    popup.style.display = "flex";
}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}


/* PASSWORD SHOW/HIDE */

function togglePassword(id) {

    const field=
        document.getElementById(id);

    if (field.type === "password") {

        field.type = "text";

    } else {

        field.type = "password";

    }
}
function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userId");
    window.location.href = "home.html";
}
function registerUser() {

    const userData = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(async (response) => {
        if (!response.ok) {
            throw new Error("HTTP error! Status: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("Success:", data);
        alert("Registration Successful!");
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Registration Failed! Check console.");
    });
}
window.onload = function () {

    const username = localStorage.getItem("loggedInUser");

    if (!username) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    fetch("http://localhost:8080/api/users/by-username/" + username)
        .then(res => res.json())
        .then(user => {

        

            document.getElementById("indiaName").value = username;
            document.getElementById("indiaEmail").value = user.email;
            document.getElementById("mobileNumber").value = user.mobile;
            document.getElementById("indiaAddress").value = user.address;

        })
        .catch(err => {
            console.log(err);
        });
};