import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Header {

  //Guardamos en Array los servicios
services = [
  { id: 'peluqueria', label: 'Peluquería' },
  { id: 'barberia', label: 'Barbería' },
  { id: 'unas', label: 'Salón de uñas' },
  { id: 'depilacion', label: 'Depilación' },
  { id: 'cejas-pestanas', label: 'Cejas y pestañas' },
  { id: 'cuidado-piel', label: 'Cuidado de la piel' },
  { id: 'masajes', label: 'Masajes' },
  { id: 'maquillaje', label: 'Maquillaje' },
  { id: 'spa', label: 'Spa' },
  { id: 'mascotas', label: 'Servicios para mascotas' },
  { id: 'tatuajes', label: 'Tienda de tatuajes' },
  { id: 'medicina-estetica', label: 'Medicina estética' },
  { id: 'piercing', label: 'Piercing' },
  { id: 'deporte-salud', label: 'Deporte y salud' },
  { id: 'cuidado-dental', label: 'Cuidado dental' },
  { id: 'trenzas', label: 'Trenzas' },
  { id: 'servicios-profesionales', label: 'Servicios profesionales' },
  { id: 'servicios-domesticos', label: 'Servicios domésticos' },
  { id: 'otros', label: 'Otros' }
];


// Scroll Infinito Services
config: SwiperOptions = {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  freeMode: true,
  grabCursor: true, 
};


}
