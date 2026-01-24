//
// Usamos este componente para crear instancias de Swiper para construir los sliders
// personalizados en la aplicación. LLamamos a la librería Swiper y definimos una función
// createSwiper que recibe un selector y opciones para inicializar el Swiper en el
// elemento correspondiente del DOM.

// Luego en cada componente definimos las opciones específicas del Swiper que queremos crear.
//

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
