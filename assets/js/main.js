document.addEventListener("DOMContentLoaded", () => {

  // Inject header
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initMenu();
      setActiveLink();
    });

  // Inject footer
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

    // Toggle main menu
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
    const current = window.location.pathname;

    links.forEach(link => {
      if (current.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  }

});
