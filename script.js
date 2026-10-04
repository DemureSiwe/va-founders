const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 90);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  navlist.classList.toggle("open");
};

navlist.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => navlist.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  navlist.classList.remove("open");
});

ScrollReveal({
  distance: "100px",
  duration: 2000,
  delay: 300,
});

ScrollReveal().reveal(".hero-text, .skills-content, .mid-left", {
  origin: "left",
});
ScrollReveal().reveal(".hero-img, .mid-right", { origin: "right" });
ScrollReveal().reveal(".scroll, .portfolio-btn, .pricing-content", {
  origin: "bottom",
});
ScrollReveal().reveal(".mid-text", { origin: "top" });
ScrollReveal().reveal(".about-copy, .tz-note", { origin: "bottom" });
ScrollReveal().reveal(
  ".services-content, .portfolio-content, .contact-content",
  { origin: "right" },
);
