import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseURL;
  // tslint:disable-next-line:variable-name
  private _auth: Auth | undefined;

  get auth(): Auth {
    // tslint:disable-next-line:no-non-null-assertion
    return this._auth!;
  }

  constructor(private http: HttpClient) {}

  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('id')) {
      return  of(false);
    }

    return this.http.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      tap(response => this._auth = response),
      // tslint:disable-next-line:no-non-null-assertion
      tap(response => localStorage.setItem('id', this._auth!.id)),
    );
  }

  logout(): void  {
    this._auth = undefined;
  }
}
