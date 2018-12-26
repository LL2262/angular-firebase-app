import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usuario: User;

  constructor(private _authService: AuthService, private ngZone: NgZone, private _router: Router) {
    
    this.usuario = {
      email: '',
      name: '',
      password: '',
    }

   }
 
  ngOnInit() { 

  }

  onRegisterUser(){
    this._authService.registerUser(this.usuario.email, this.usuario.password).then(
      response =>{
        if(response.user){
          this.ngZone.run(() => this._router.navigate(['/admin/list-books']));
        }
      },
      error => {

      }
    );
  }

}
