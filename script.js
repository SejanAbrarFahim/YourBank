  document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const closeMenuButton = document.getElementById("close-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

      // preloader 
        window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");

         if (!preloader) return;
              setTimeout(() => {
              preloader.classList.add("opacity-0", "pointer-events-none");
 
               setTimeout(() => {
                preloader.remove();
                }, 700); 
            }, 1000);
          });

          // mobile menu
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