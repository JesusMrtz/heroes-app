import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interface/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  private url = environment.baseURL;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  getHeroeById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }

  getSuggestionsHeroes(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${term}&_limit=6`);
  }

  createHero(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.url}/heroes`, heroe);
  }

  updatedHero(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.url}/heroes/${heroe.id}`, heroe);
  }

  deletedHero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/heroes/${id}`);
  }
}
