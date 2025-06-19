document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll on scroll indicator
  const scrollLink = document.querySelector(".scroll-indicator");
  if (scrollLink) {
    scrollLink.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Toggle "like" heart icons (with stopPropagation fix)
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    heart.addEventListener("click", function (e) {
      e.stopPropagation(); // 🛑 Prevent card click
      this.textContent = this.textContent === "♡" ? "♥" : "♡";
      this.style.color = this.textContent === "♥" ? "red" : "black";
    });
  });

  // Add "Filter Coming Soon!" alert
  const filterButtons = document.querySelectorAll(".filters button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      alert(`"${button.textContent}" filter coming soon!`);
    });
  });

  // Make non-clickable destination cards open a modal or redirect
  const cards = document.querySelectorAll(
    ".destination-card:not(.destination-card-link .destination-card)"
  );
  cards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      alert("More info about this destination coming soon!");
      // Optional: you could redirect or open a modal here instead
    });
  });

  // Bonus: Easter egg — press "L" to toggle all hearts
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "l") {
      hearts.forEach((heart) => {
        heart.textContent = heart.textContent === "♡" ? "♥" : "♡";
        heart.style.color = heart.textContent === "♥" ? "red" : "black";
      });
    }
  });

  // 🔄 Map toggle + info + zoom effect
  const mapFrame = document.querySelector(".right-part iframe");
  const toggleMapBtn = document.getElementById("toggleMapBtn");
  const mapInfo = document.getElementById("mapInfo");

  if (toggleMapBtn && mapFrame) {
    toggleMapBtn.addEventListener("click", () => {
      if (mapFrame.style.display === "none") {
        mapFrame.style.display = "block";
        toggleMapBtn.textContent = "Hide Map";
        mapInfo.style.display = "none";
      } else {
        mapFrame.style.display = "none";
        toggleMapBtn.textContent = "Show Map";
        mapInfo.style.display = "block";
      }
    });

    mapFrame.style.transition = "transform 0.3s ease";
    mapFrame.addEventListener("mouseenter", () => {
      mapFrame.style.transform = "scale(1.05)";
    });
    mapFrame.addEventListener("mouseleave", () => {
      mapFrame.style.transform = "scale(1)";
    });
  }

  // Back to Top button functionality
  const backToTopBtn = document.getElementById("scrollUpBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("mouseenter", () => {
    backToTopBtn.style.opacity = "1";
  });
  backToTopBtn.addEventListener("mouseleave", () => {
    backToTopBtn.style.opacity = "0.7";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
