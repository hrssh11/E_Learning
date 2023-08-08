import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGaurd implements CanActivate {
  constructor( private toast : ToastrService ,

    private userapi : AuthService  , private route: Router, private router:ActivatedRoute){
  
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable <boolean | UrlTree>  | Promise<boolean |UrlTree> | boolean | UrlTree{ 
      if(this.userapi.isLoggedin() && this.userapi.getUserRole() === 'admin' ){
        return true
      }else{
        this.route.navigate(['login'],{relativeTo:this.router})
        return false
      }
  }

}