import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authServide: AuthService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authServide.verificaEstadoAutenticacion().pipe(
        tap(estaAutenticado => {
          if(!estaAutenticado){
              this.router.navigate(['./auth/login'])
          }
        })
      )

  }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

    return this.authServide.verificaEstadoAutenticacion().pipe(
      tap(estaAutenticado => {
        if(!estaAutenticado){
            this.router.navigate(['./auth/login'])
        }
      })
    )


    //   if(this.authServide.auth?.id){
    // return true;

    //   }
    //   console.log('Bloqueado por canLoad');
    //   return false
  }
}
