import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { Book } from '../../../models/book';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor() {

   }
  
  ngOnInit() {

  }

}



