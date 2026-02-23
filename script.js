const toggle = document.getElementById("menu-toggle");
const topbar = document.getElementById("topbar");
const close = document.getElementById("close");

// click to open and hide the menu
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
});

// hide automatically when browser
window.addEventListener("scroll", () => {
  toggle.classList.remove("active");
  topbar.classList.remove("active");
});

// hidding after select
document.querySelectorAll("#topbar a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    topbar.classList.remove("active");
  });
});
