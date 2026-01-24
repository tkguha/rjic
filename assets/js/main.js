document.addEventListener("DOMContentLoaded", () => {

  // Inject header
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      setActiveLink();
    });

  // Inject footer
  fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });

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
