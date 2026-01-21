
import { createSwiper } from "../lib/createSwiper";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


    export function initFincaGallery() {
    // Elementos a capturar:
    const lightbox = document.getElementById("finca-gallery-lightbox");
    const closeBtn = document.getElementById("close-finca-gallery");
    const galleryImages = document.querySelectorAll("[data-gallery-img]");

    const modulo_galeria_imagenes = createSwiper({
            selector: ".finca-gallery-swiper",
            options:{
              modules: [Navigation, Pagination, Keyboard],
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              pagination: {
                el: ".swiper-pagination",
                type: "fraction",
              },
              keyboard: {
                enabled: true,
              },
              loop: true,
              zoom: false,
              spaceBetween: 20,
            },
        });


        // Logica del modal ----------------------------------------------
        // Abrir lightbox al hacer click en una imagen
        galleryImages.forEach((img) => {
          img.addEventListener("click", () => {
            const index = parseInt(img.getAttribute("data-gallery-img") || "0");
            if (lightbox && modulo_galeria_imagenes) {
              lightbox.classList.remove("hidden");
              lightbox.classList.add("flex");
              modulo_galeria_imagenes.slideToLoop(index);
              document.body.style.overflow = "hidden";
            }
          });
        });

        // Cerrar lightbox
        function closeFincaLightbox() {
          if (lightbox) {
            lightbox.classList.add("hidden");
            lightbox.classList.remove("flex");
            document.body.style.overflow = "";
          }
        }

        closeBtn?.addEventListener("click", closeFincaLightbox);

        // Cerrar con ESC
        document.addEventListener("keydown", (e) => {
          if (
            e.key === "Escape" &&
            lightbox &&
            !lightbox.classList.contains("hidden")
          ) {
            closeFincaLightbox();
          }
        });

        // Cerrar al hacer click en el fondo
        lightbox?.addEventListener("click", (e) => {
          if (
            e.target === lightbox ||
            (e.target as HTMLElement)?.classList.contains("swiper")
          ) {
            closeFincaLightbox();
          }
        });

        
    }



      // Inicializar cuando el DOM esté listo
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initFincaGallery);
      } else {
        initFincaGallery();
      }
