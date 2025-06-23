// Enable live search of the "Top cities"

// Show alert on hero search

// Toggle a filter panel

// Highlight the clicked nav link

//  Add click & hover effects to top city cards

document.addEventListener("DOMContentLoaded", function () {
  // 🌐 Language Dropdown Toggle
  const toggle = document.getElementById("language-toggle");
  const menu = document.getElementById("language-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
      }
    });
  }

  // 1. Highlight clicked nav link
  const navLinks = document.querySelectorAll(".navbar nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // 2. Toggle filter panel
  const filterBtn = document.querySelector(".filter-button");
  if (filterBtn) {
    const filterPanel = document.createElement("div");
    filterPanel.className = "filter-panel";
    filterPanel.style.display = "none";
    filterPanel.style.background = "#f0f0f0";
    filterPanel.style.padding = "15px";
    filterPanel.style.margin = "10px auto";
    filterPanel.style.borderRadius = "8px";
    filterPanel.style.maxWidth = "800px";
    filterPanel.innerHTML = "<p>Filter options coming soon!</p>";
    document.body.insertBefore(filterPanel, document.querySelector(".tour-cards"));

    filterBtn.addEventListener("click", function () {
      filterPanel.style.display =
        filterPanel.style.display === "none" ? "block" : "none";
    });
  }

  // 3. Hero search alert
  const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  function handleHeroSearch() {
    const term = searchInput.value.trim();
    if (term) {
      alert("You searched for: " + term);
    }
  }

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", handleHeroSearch);

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleHeroSearch();
      }
    });
  }

  // 4. Live city search
  const citySearchInput = document.querySelector(".city-search");
  const cityCards = document.querySelectorAll(".city-card");
  if (citySearchInput && cityCards.length) {
    citySearchInput.addEventListener("input", function () {
      const query = citySearchInput.value.toLowerCase();
      cityCards.forEach((card) => {
        const label = card.textContent.toLowerCase();
        card.style.display = label.includes(query) ? "inline-block" : "none";
      });
    });
  }

  // 5. Add click & hover effects to top city cards
  cityCards.forEach((card) => {
    card.addEventListener("click", function () {
      if (card.querySelector("a")) return;
      const label = card.querySelector(".city-label")?.textContent || card.textContent;
      alert(`You selected: ${label} — Page coming soon!`);
    });

    card.addEventListener("mouseover", function () {
      card.style.cursor = "pointer";
      card.style.transform = "scale(1.03)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseout", function () {
      card.style.transform = "scale(1)";
    });
  });

  // 6. Destination cards alert for non-Duft destinations
  const tourCards = document.querySelectorAll(".tour-cards .card");
  tourCards.forEach((card) => {
    const link = card.querySelector("a");
    if (link && link.getAttribute("href") === "Destination.html") return;

    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.textContent || "This destination";
      alert(`Page for "${title}" is coming soon!`);
    });

    card.addEventListener("mouseover", () => {
      card.style.cursor = "pointer";
      card.style.transform = "scale(1.02)";
      card.style.transition = "transform 0.2s ease";
    });

    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
