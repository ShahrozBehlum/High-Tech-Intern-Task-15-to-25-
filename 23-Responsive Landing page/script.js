const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.querySelector(".input-box #name").value.trim();
    const email = document.querySelector(".input-box #email").value.trim();
    const num = document.querySelector(".input-box #number").value.trim();
    const email_sub = document.querySelector(".input-box #email-sub").value.trim();
    const msg = document.querySelector("#msg").value.trim();

    if (!fname || !email || !msg || !num || !email_sub) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message submitted successfully!");
    form.reset();
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

