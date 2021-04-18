import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';

@Pipe({
  name: 'heroeImage'
})
export class HeroeImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    if (!heroe.id) {
      return `./assets/img/no-image.png`;
    }
    if (heroe.alt_img) {
      return heroe.alt_img;
    }
    return `./assets/img/heroes/${heroe.id}.jpg`;
  }

}
