let f_container = document.querySelector(".login-container");
let s_container = document.querySelector(".sign-container");
let sp_btn = document.querySelector(".sign-up1");
let si_btn = document.querySelector(".sign-in");

// Show login by default
f_container.classList.remove("hide1");
s_container.classList.add("hide2");

// Sign-Up Button
sp_btn.addEventListener("click", () => {
  f_container.classList.add("hide1");
  s_container.classList.remove("hide2");
});

// Sign-In Button
si_btn.addEventListener("click", () => {
  s_container.classList.add("hide2");
  f_container.classList.remove("hide1");
});
