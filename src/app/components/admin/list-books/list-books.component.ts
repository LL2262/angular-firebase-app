import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { Book } from '../../../models/book';

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
      books.sort(function(a, b){
        return ((a.fecha == b.fecha) ? 0 : ((a.fecha > b.fecha) ? 1 : -1 ));
      })
      this.books = books;
      console.log(this.books);
    });
  }



  onSaveBook(formBook){
    var a = new Date().getDate();
    var b = new Date().getMonth() + 1;
    var c = new Date().getFullYear();
    var d = new Date().getHours();
    var e = new Date().getMinutes();
    var f = new Date().getSeconds();
    this.book.fecha = c+''+b+''+a+''+d+''+e+''+f;
    console.log(this.book);
    this._dataApiService.addBook(this.book);

    formBook.reset();
  }

  onDeleteBook(){
    this._dataApiService.deleteBook(this.book);
  }

}



