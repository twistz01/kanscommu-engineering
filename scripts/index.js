// NAV scroll effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

function openMenu() {
  hamburger.classList.add("open");
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
}

hamburger.addEventListener("click", () => {
  hamburger.classList.contains("open") ? closeMenu() : openMenu();
});

// Close menu when a nav link is clicked
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const sendBtn = document.getElementById("sendRequest");

sendBtn.addEventListener("click", () => {
  const name = document.querySelector('input[placeholder="Full Name"]').value;
  const email = document.querySelector(
    'input[placeholder="Email Address"]',
  ).value;
  const phone = document.querySelector(
    'input[placeholder="Phone Number"]',
  ).value;
  const service = document.querySelector("select").value;
  const message = document.querySelector("textarea").value;

  const mailtoLink = `mailto:info@kanscommuengineering.com?subject=New Quote Request&body=
      Name: ${name}%0D%0A
      Email: ${email}%0D%0A
      Phone: ${phone}%0D%0A
      Service: ${service}%0D%0A
      Message: ${message}`;

  window.location.href = mailtoLink;
});
