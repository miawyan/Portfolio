const toggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// click to open and hide the menu
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  sidebar.classList.toggle("active");
});

// hide automatically when browser
window.addEventListener("scroll", () => {
  sidebar.classList.remove("active");
});

// hidding after select
document.querySelectorAll("#sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
