import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: User;

  constructor(private _authService: AuthService, private ngZone: NgZone, private _router: Router) {

    this.usuario = {};

  }

  ngOnInit() { 
  }

  onLoginEmail(){
    this._authService.loginEmailUser(this.usuario.email, this.usuario.password).then(
      response => {
        if(response.user){
          this.ngZone.run(() => this._router.navigate(['/admin/list-books']));
        }
      },
      error => {
        if(error.code == "auth/invalid-email"){
          console.log("Formato de email incorrecto");
        }
        if(error.code == "auth/user-not-found"){
          console.log("No existe un usuario con ese email");
        }
        if(error.code == "auth/wrong-password"){
          console.log("Contraseña incorretca o ya existe un usuario con ese email");
        }
      }
    );
  }

  onLoginFacebook(){
    this._authService.loginFacebookUser().then(
      response => {
        if(response.user){
          this.ngZone.run(() => this._router.navigate(['/admin/list-books']));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  onLoginGoogle(){
    this._authService.loginGooglelUser().then(
      response => {
        if(response.user){
          this.ngZone.run(() => this._router.navigate(['/admin/list-books']));
        }
      },
      error => {
        console.log(error);
      }
    );
    
  }

  onLogout(){
    this._authService.logoutUser();
  }

}
