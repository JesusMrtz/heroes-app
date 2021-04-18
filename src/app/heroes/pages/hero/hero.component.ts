import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interface/heroe.interface';
import { switchMap } from 'rxjs/operators';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class HeroComponent implements OnInit {
  hero!: Heroe;

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id}) => this.heroeService.getHeroeById(id)))
    .subscribe((hero) => this.hero = hero);
  }

  back(): void {
    this.router.navigate(['/heroe/list-heroes']);
  }

}
