import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private _router: Router) { }

  ngOnInit() { 

  }

  onLoginFacebook(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider);
    this._router.navigate(['admin/list-books']);
  }

  onLoginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider).then(user => {
      if(user){
        this._router.navigate(['admin/list-books']);
      }
    });
    
  }

  onLogout(){
    this.afAuth.auth.signOut();
  }

}
