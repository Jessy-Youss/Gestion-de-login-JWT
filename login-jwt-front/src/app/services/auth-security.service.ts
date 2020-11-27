import { Injectable } from '@angular/core';
import { Router,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserIsNotLogin {
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
export class UserIsLogin {
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
