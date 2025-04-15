document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");
    const menu = document.getElementById("menu"); 
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";
      } else {
        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";
      }
    });
  
    backToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    const observer = new MutationObserver(() => {
      if (menu.classList.contains("open")) {
        backToTop.classList.add("menu-open");
      } else {
        backToTop.classList.remove("menu-open");
      }
    });
  
    observer.observe(menu, { attributes: true, attributeFilter: ['class'] });
  });
  