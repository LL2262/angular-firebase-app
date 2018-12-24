import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public usuario: User
  public providerId: string

  constructor(private authService: AuthService) { 

    this.usuario = {
      id: '',
      email: '',
      name: '',
      password: '',
      image: null
    }

    this.providerId = 'null';
  }

  ngOnInit() {
    this.authService.isAuth().subscribe(user => {
      if(user){
        this.usuario.name = user.displayName;
        this.usuario.email = user.email;
        this.usuario.image = user.photoURL;
        this.providerId = user.providerData[0].providerId;
        console.log(this.usuario)
      }
    })
  }
  
}
