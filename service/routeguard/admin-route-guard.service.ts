import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginSessionService } from '../data/login-session.service';
import { UserloginService } from '../userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuardService implements CanActivate {
  constructor(private service: UserloginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.service.isAdminLoggedIn()) {
      return true
    }
    this.router.navigate(['']);
    return false;

  }


}
