document.addEventListener("DOMContentLoaded", function () {
  // HEART ICON ANIMATION
  const heartIcon = document.querySelector(".favorite-icon");
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("clicked");
    heartIcon.style.transform = "scale(1.4)";
    heartIcon.style.transition = "transform 0.3s";
    setTimeout(() => {
      heartIcon.style.transform = "scale(1)";
    }, 300);
  });

  // WEATHER ICON MESSAGE & ANIMATION
  const weatherIcon = document.querySelector(".weather-icon");
  weatherIcon.addEventListener("click", () => {
    weatherIcon.style.transform = "scale(1.4)";
    weatherIcon.style.transition = "transform 0.3s";
    setTimeout(() => {
      weatherIcon.style.transform = "scale(1)";
    }, 300);
    alert("Sorry, the weather app is under the weather today!");
  });

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
      alert("Thanks! We will check your review and publish it as soon as possible.");
      textarea.remove();
      sendBtn.remove();
    });
  });
});
