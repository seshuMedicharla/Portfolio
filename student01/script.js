// Auto Year
document.getElementById("year").innerHTML = new Date().getFullYear();

// Status Text
document.getElementById("statusText").innerHTML =
"Building modern interactive web projects";

// Typing Effect
let text = "Seshu Medicharla";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Scroll Reveal
window.addEventListener("scroll", reveal);

function reveal() {
  let cards = document.querySelectorAll(".reveal");
  cards.forEach(card => {
    let top = card.getBoundingClientRect().top;
    let winHeight = window.innerHeight;
    if (top < winHeight - 100) {
      card.classList.add("active");
    }
  });
}
