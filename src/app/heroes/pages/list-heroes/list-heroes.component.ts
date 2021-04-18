import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styles: []
})
export class ListHeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroeService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

}
