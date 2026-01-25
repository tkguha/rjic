document.addEventListener("DOMContentLoaded", () => {

  // Load header
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initMenu();
      setActiveLink();
    });

  // Load footer
  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  function initMenu() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");

      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });

    // Toggle ABOUT submenu on mobile
    dropdownBtn.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  function setActiveLink() {
    const links = document.querySelectorAll(".main-nav a");
    const current = window.location.pathname.split("/").pop();

    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  }

});

// Countdown Timer

const eventDate = new Date("February 26, 2026 09:00:00").getTime();
const countdownEl = document.getElementById("countdown");

if (countdownEl) {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff < 0) {
      countdownEl.innerHTML = "Conference Started!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerHTML = `
      <span>${days}<br>Days</span>
      <span>${hours}h</span>
      <span>${minutes}m</span>
      <span>${seconds}s</span>
    `;
  }, 1000);
}
