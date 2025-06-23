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

  // HEART ICON ANIMATION
  const heartIcon = document.querySelector(".favorite-icon");
  if (heartIcon) {
    heartIcon.addEventListener("click", () => {
      heartIcon.classList.toggle("clicked");
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("fa-solid");

      heartIcon.style.transform = "scale(1.4)";
      heartIcon.style.transition = "transform 0.3s";
      setTimeout(() => {
        heartIcon.style.transform = "scale(1)";
      }, 300);
    });
  }

  // WEATHER ICON MESSAGE & ANIMATION
  const weatherIcon = document.querySelector(".weather-icon");
  if (weatherIcon) {
    weatherIcon.addEventListener("click", () => {
      weatherIcon.style.transform = "scale(1.4)";
      weatherIcon.style.transition = "transform 0.3s";
      setTimeout(() => {
        weatherIcon.style.transform = "scale(1)";
      }, 300);
      alert("Sorry, the weather app is feeling under the weather today 😓");
    });
  }

  // IMAGE GALLERY ZOOM-IN
  const photos = document.querySelectorAll(".photos img");
  photos.forEach(photo => {
    photo.style.cursor = "pointer";
    photo.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.zIndex = "999";

      const img = document.createElement("img");
      img.src = photo.src;
      img.style.maxWidth = "70%";
      img.style.maxHeight = "80%";
      img.style.borderRadius = "10px";
      img.style.boxShadow = "0 0 20px white";

      overlay.appendChild(img);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });

  // REVIEW FORM CREATION
  const reviewBtn = document.querySelector(".review-btn");
  if (reviewBtn) {
    reviewBtn.addEventListener("click", () => {
      if (document.querySelector(".dynamic-review-form")) return;

      const container = document.querySelector(".review-right");

      const textarea = document.createElement("textarea");
      textarea.placeholder = "Write your review here...";
      textarea.style.width = "100%";
      textarea.style.height = "100px";
      textarea.style.marginTop = "10px";
      textarea.style.padding = "10px";
      textarea.classList.add("dynamic-review-form");
      textarea.style.fontSize = "2em";

      const sendBtn = document.createElement("button");
      sendBtn.innerText = "Send";
      sendBtn.style.marginTop = "10px";
      sendBtn.style.padding = "10px 20px";
      sendBtn.style.backgroundColor = "#304063";
      sendBtn.style.color = "white";
      sendBtn.style.border = "none";
      sendBtn.style.borderRadius = "5px";
      sendBtn.style.cursor = "pointer";

      container.appendChild(textarea);
      container.appendChild(sendBtn);

      sendBtn.addEventListener("click", () => {
        alert("Please sign in or create an account to use this feature.");
        textarea.remove();
        sendBtn.remove();
      });
    });
  }
});


