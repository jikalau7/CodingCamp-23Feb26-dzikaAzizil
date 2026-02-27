document.addEventListener("DOMContentLoaded", () => {

  /* ================= NAVBAR ================= */

  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let open = false;

  // Scroll effect
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add(
          "backdrop-blur-xl",
          "border-b",
          "border-cyan-400/20",
          "shadow-lg",
          "shadow-cyan-500/10"
        );
      } else {
        navbar.classList.remove(
          "backdrop-blur-xl",
          "border-b",
          "border-cyan-400/20",
          "shadow-lg",
          "shadow-cyan-500/10"
        );
      }
    });
  }

  // Mobile toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      open = !open;

      if (open) {
        mobileMenu.classList.remove("max-h-0", "opacity-0");
        mobileMenu.classList.add("max-h-96", "opacity-100");
        menuBtn.innerHTML = "✕";
      } else {
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        mobileMenu.classList.add("max-h-0", "opacity-0");
        menuBtn.innerHTML = "☰";
      }
    });
  }

  /* ================= WORK EXPERIENCE ================= */

  const timelineItems = document.querySelectorAll(".timeline-item");

  if (timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }, index * 200);

          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));
  }

  /* ================= PROJECT CARD TILT ================= */

  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {

    card.style.transformStyle = "preserve-3d";
    card.style.perspective = "1000px";

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 15;
      const rotateY = (x - centerX) / 15;

      card.style.transition = "transform 0.1s ease";
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform 0.5s ease";
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

});