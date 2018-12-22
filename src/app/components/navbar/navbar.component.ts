import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public titulo: String;
  public isLogin: boolean;

  constructor() {

    this.titulo = 'BookStore';
    this.isLogin = false;

   }

  ngOnInit() {

  }

}
