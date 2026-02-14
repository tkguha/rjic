document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOAD HEADER ================= */

  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initMenu();
      setActiveLink();
    });

  /* ================= LOAD FOOTER ================= */

  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

  /* ================= MENU ================= */

  function initMenu() {

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");
    const dropdowns = document.querySelectorAll(".dropdown");

    /* Toggle hamburger menu */

    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");

      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", !expanded);
    });

    /* Mobile dropdown toggle (ALL dropdowns) */

    dropdowns.forEach(drop => {

      const btn = drop.querySelector(".dropbtn");

      btn.addEventListener("click", (e) => {

        if (window.innerWidth <= 900) {

          e.preventDefault();

          // Close other dropdowns
          dropdowns.forEach(d => {
            if (d !== drop) d.classList.remove("open");
          });

          // Toggle selected
          drop.classList.toggle("open");
        }
      });

    });

  }

  /* ================= ACTIVE LINK ================= */

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


/* ================= COUNTDOWN TIMER ================= */

const eventDate = new Date("March 24, 2026 10:00:00").getTime();
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
/* ==========old script
    countdownEl.innerHTML = `
      <span>${days}<br>D</span>
      <span>${hours}h</span>
      <span>${minutes}m</span>
      <span>${seconds}s</span>
    `;
============  */
countdownEl.innerHTML = `
  <div class="count-box">
    <span>${days}</span>
    <small>Days</small>
  </div>
  <div class="count-box">
    <span>${hours}</span>
    <small>Hours</small>
  </div>
  <div class="count-box">
    <span>${minutes}</span>
    <small>Minutes</small>
  </div>
  <div class="count-box">
    <span>${seconds}</span>
    <small>Seconds</small>
  </div>
`;

  }, 1000);

}


/* ================= FADE IN ON SCROLL ================= */

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {

  entries.forEach(entry => {

    if (!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);

  });

}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
