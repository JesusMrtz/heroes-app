import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Heroe } from '../../interface/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: []
})
export class SearchHeroComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef <HTMLInputElement>;
  term = '';
  heroes: Heroe[] = [];
  selectedHero: Heroe | undefined;

  constructor(private heroeService: HeroeService) { }

  ngAfterViewInit(): void {
    const keyUp = fromEvent(this.searchInput.nativeElement, 'keyup');

    keyUp.pipe(debounceTime(500))
    .subscribe(() => {
      if (!this.term.trim().length ) {
        this.heroes = [];
        return;
      }
      this.heroeService.getSuggestionsHeroes(this.term.trim()).subscribe((heroe) => this.heroes = heroe);
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: Heroe = event.option.value;
    this.term = hero.superhero;

    // tslint:disable-next-line:no-non-null-assertion
    this.heroeService.getHeroeById( hero.id! ).subscribe((response) => this.selectedHero = response);
  }

}
