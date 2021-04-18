import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px
    }
    `
  ]
})
export class CardHeroeComponent implements OnInit {
  @Input() heroe!: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
