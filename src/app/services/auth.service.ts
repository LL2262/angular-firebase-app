import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { auth } from 'firebase/app';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private _afsAuth: AngularFireAuth) {}
  

  registerUser(email, password) {
    return this._afsAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginEmailUser(email: string, password: string) {
    return this._afsAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginFacebookUser() {
    return this._afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider);
  }

  loginGooglelUser() {
    return this._afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }

  logoutUser(){
    return this._afsAuth.auth.signOut();
  }

  isAuth(){
    return this._afsAuth.authState.pipe(map (auth => auth));
  }
  
}
