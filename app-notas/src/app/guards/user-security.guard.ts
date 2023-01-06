import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserSecurityGuard implements CanActivate {
  
  constructor(private loginService:LoginServiceService, private router:Router){

  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.loginService.isLoggedIn() && this.loginService.getUserRole() =='ROLE_USER')
    {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
