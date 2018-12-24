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

  public books = [];
  public book: Book;

  constructor(private _dataApiService: DataApiService) {

    this.book = {};

  }
  
  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this._dataApiService.getAllBooks().subscribe(books =>{
      this.books = books;
      console.log('books:', books);
    });
  }

  onDeleteBook(){
    this._dataApiService.deleteBook(this.book)
  }

}



