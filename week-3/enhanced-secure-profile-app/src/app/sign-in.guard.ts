import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn = next.queryParams['isLoggedIn'];
    if (isLoggedIn == 'true') {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }


  constructor(private router: Router) { }


}
