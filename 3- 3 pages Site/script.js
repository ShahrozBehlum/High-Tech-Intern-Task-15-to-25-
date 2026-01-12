const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    if (!fname || !email || !msg) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message submitted successfully!");
    form.reset();
});
