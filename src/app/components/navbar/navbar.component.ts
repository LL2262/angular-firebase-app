import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public titulo: String;
  public isLogin: boolean;

  constructor(private _authService: AuthService, private _router: Router) {

    this.titulo = 'BookStore';
    this.isLogin = false;

   }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this._authService.isAuth().subscribe(auth =>{
      if(auth){
        this.isLogin = true;
      }else{
        this.isLogin = false;
      }
    })
  }

  onLogout(){
    this._authService.logoutUser();
  }

}
