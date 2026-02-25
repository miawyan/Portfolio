// Notice Panel
const notice = document.getElementById("dev-notice");
const closeNotice = document.getElementById("close-notice");

closeNotice.addEventListener("click", () => {
  notice.style.display = "none";
});

window.addEventListener("scroll", function () {
  const nav = document.getElementById("top-nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
// menu toggle
const toggle = document.getElementById("menu-toggle");
const topbar = document.getElementById("topbar");
const close = document.getElementById("close");

// click to open and hide the menu
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");

  if (toggle.classList.contains("active")) {
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
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
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// about section tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll(".tab-section");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabSections.forEach((section) => section.classList.remove("active"));

    button.classList.add("active");
    const target = button.getAttribute("data-tag");
    document
      .querySelector(`.tab-section[data-content="${target}"]`)
      .classList.add("active");
  });
});

// emailjs
emailjs.init("k7Q-YonG32SKGWS1a");
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  emailjs.sendForm("service_e1fze4r", "template_4et56ma", this).then(
    () => {
      status.innerText = "Message sent successfully!";
      status.style.color = "#27f7a0";
      form.reset();
    },
    (err) => {
      status.innerText = "Something went wrong.";
      status.style.color = "red";
    },
  );
});
window.innerWidth;
