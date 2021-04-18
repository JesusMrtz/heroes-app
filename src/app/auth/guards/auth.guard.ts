import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verifyAuth()
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
  }

  /** canLoad evita que se cargue el modulo, pero si ya fue cargado con atenrioridad no funcionará  */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
      return this.authService.verifyAuth()
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            this.router.navigate(['./auth/login']);
          }
        })
      );
    }
  }
