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

  // Toggle "like" heart icons
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    heart.addEventListener("click", function () {
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
});
