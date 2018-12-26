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
  public booksAux = [];
  public book: Book;

  constructor(private _dataApiService: DataApiService) {

    this.book = {}

  }
  
  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
    this._dataApiService.getAllBooks().subscribe(books =>{
      this.booksAux = books;
      for(var i = this.booksAux.length-1;i>=0;i--){
        this.books.push(this.booksAux[i]);
    }
      console.log('books:', this.books);
    });
  }

  onSaveBook(){
    this._dataApiService.addBook(this.book);
  }

  onDeleteBook(){
    this._dataApiService.deleteBook(this.book);
  }

}



