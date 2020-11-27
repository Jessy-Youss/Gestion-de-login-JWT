import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserIsNotLoggedIn {
  constructor(private router: Router) {
  }
  canActivate() {
    const isNoSignedIn = localStorage.accessToken;
    if (isNoSignedIn === undefined) {
      return true
    }
    this.router.navigateByUrl('/home')

  }
}


@Injectable({
  providedIn: 'root'
})
export class UserIsLoggedIn {
  constructor(private router: Router) {
  }
  canActivate() {
    const isNoSignedIn = localStorage.accessToken;
    if (isNoSignedIn !== undefined) {
       return true
    }
    this.router.navigateByUrl('/login')

  }
}
