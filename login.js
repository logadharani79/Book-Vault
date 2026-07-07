function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (username === "" || password === "") {
        msg.style.color = "red";
        msg.innerText = "Please enter credentials";
        return;
    }

    fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    .then(res => res.json())

    .then(data => {

        if (data != null) {

            msg.style.color = "lightgreen";
            msg.innerText = "Login Successful";

            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        } else {

            msg.style.color = "red";
            msg.innerText = "Invalid username or password";
        }

    })

    .catch(error => {
        msg.style.color = "red";
        msg.innerText = "Cannot connect to server";
        console.log(error);
    });
}