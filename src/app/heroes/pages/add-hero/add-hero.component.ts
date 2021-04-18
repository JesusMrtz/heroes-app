import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { Heroe, Publisher } from '../../interface/heroe.interface';
import { HeroeService } from '../../services/heroe.service';
import { ConfimDialogComponent } from '../../components/confim-dialog/confim-dialog.component';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
    img {
      width: 100%;
      border-radius: 5px;
    }
    `
  ]
})
export class AddHeroComponent implements OnInit {
  title = 'Nuevo heroe';
  publishers = [
    {
      id: 'DC Comics',
      description: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      description: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  };

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute,
              private router: Router, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.router.url.includes('edit-hero')) {
      this.title = 'Editar heroe';
      this.activatedRoute.params.pipe(switchMap(({id}) => this.heroeService.getHeroeById(id)))
      .subscribe((heroe) => this.heroe = heroe);
    }
  }

  save(): void {
    if (!this.heroe.superhero.trim().length) {
      return;
    }

    if (this.heroe.id) {
      this.heroeService.updatedHero(this.heroe).subscribe((hero) => {
        this.heroe = hero;
        this.showSnackBar('Registro actualizado');
      });
    } else {
      this.heroeService.createHero(this.heroe).subscribe((hero) => {
        this.router.navigate(['/heroe', hero.id, 'view']);
        this.showSnackBar('Registro creado');
      });
    }
  }

  deleteHero(): void {
    const dialog = this.dialog.open(ConfimDialogComponent, {
      width: '40%',
      data: this.heroe
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        // tslint:disable-next-line:no-non-null-assertion
        this.heroeService.deletedHero( this.heroe.id! ).subscribe(() => {
          this.router.navigate(['/heroe/list-heroes']);
        });
      }
    });
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }

}
