// Año footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.hasAttribute("hidden");
    if (isOpen) {
      mobileMenu.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", "false");
    } else {
      mobileMenu.removeAttribute("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    }
  });

  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Reveal on scroll (fade-up)
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// Before/After slider
const range = document.getElementById("baRange");
const before = document.getElementById("baBefore");
const divider = document.getElementById("baDivider");

function setBA(v) {
  const pct = Math.max(0, Math.min(100, Number(v)));
  before.style.width = pct + "%";
  divider.style.left = pct + "%";
}
if (range && before && divider) {
  setBA(range.value);
  range.addEventListener("input", (e) => setBA(e.target.value));
}
