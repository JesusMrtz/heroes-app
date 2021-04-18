import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { ErrorPageComponent } from '../shared/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'add-hero',
        component: AddHeroComponent
      },
      {
        path: 'edit-hero/:id',
        component: AddHeroComponent
      },
      {
        path: ':id/view',
        component: HeroComponent
      },
      {
        path: 'list-heroes',
        component: ListHeroesComponent
      },
      {
        path: 'search',
        component: SearchHeroComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
