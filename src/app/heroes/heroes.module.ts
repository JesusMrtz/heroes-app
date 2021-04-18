import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { HeroComponent } from './pages/hero/hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';

import { HeroeImagePipe } from './pipes/heroe-image.pipe';
import { ConfimDialogComponent } from './components/confim-dialog/confim-dialog.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListHeroesComponent,
    CardHeroeComponent,
    HeroComponent,
    SearchHeroComponent,
    AddHeroComponent,
    HeroeImagePipe,
    ConfimDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
