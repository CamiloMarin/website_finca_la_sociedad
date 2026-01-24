import { createSwiper } from "../createSwiper";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

export function initHoverSwiper() {
  const modulo_hover_swiper = createSwiper({
    selector: ".hover-swiper",
    options: {},
  });
}

// iniciamos el Swiper para el componente de los sliders de hover
// Inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHoverSwiper);
} else {
  initHoverSwiper();
}
