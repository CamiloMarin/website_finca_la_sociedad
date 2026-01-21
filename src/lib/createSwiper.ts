// importamos el componente Slider desde la librería 'swiper'
import Swiper from "swiper";

import type { SwiperOptions } from "swiper/types";

// Primero creo un type de las opciones del swiper

export type CreateSwiperParams = {
  selector: string;
  options: SwiperOptions; // opciones del swiper
};

// Función para crear un nuevo Swiper

export function createSwiper({ selector, options }: CreateSwiperParams) {
  // Buscamos el elemento del DOM usando el selector proporcionado
  const element = document.querySelector(selector) as HTMLElement;

  // caso de error: si no se encuentra el elemento, mostramos una advertencia y retornamos null
  if (!element) {
    console.warn(`Elemento no encontrado para el selector: ${selector}`);
    return null;
  }

  // Retornamos una nueva instancia de Swiper con el elemento y las opciones proporcionadas con el spread operator

  return new Swiper(element as HTMLElement, { ...options });
}
