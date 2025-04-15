let slideIndex = -1; // start op -1 zodat eerste echte slide pas in showSlides begint
const slides = document.getElementsByClassName("mySlides");

function showSlides() {
  // Verberg alle slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Volgende slide
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // Toon huidige slide
  slides[slideIndex].classList.add("active");

  // Volgende wissel over 4 seconden
  setTimeout(showSlides, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  // === Scroll naar boven pijltje ===
  const backToTop = document.getElementById("backToTop");

  // Optioneel: enkel tonen als je naar beneden scrollt
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.style.opacity = "1";
      backToTop.style.pointerEvents = "auto";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.pointerEvents = "none";
    }
  });

  // Klik op pijltje: smooth scroll naar boven
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
