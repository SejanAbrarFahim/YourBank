  document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const closeMenuButton = document.getElementById("close-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileMenuButton.addEventListener("click", function () {
          mobileMenu.classList.remove("hidden");
          mobileMenu.classList.add("flex");
          document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
        });

        closeMenuButton.addEventListener("click", function () {
          mobileMenu.classList.remove("flex");
          mobileMenu.classList.add("hidden");
          document.body.style.overflow = ""; // Re-enable scrolling
        });
      });