import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  public book: Book;

  constructor(private _dataApiService: DataApiService, private _activateRoute: ActivatedRoute) {

    this.book = {};
    
   }

  ngOnInit() {
    this.getDetailsBook();
  }

  getDetailsBook(){
    const id = this._activateRoute.snapshot.params['id'];
    this._dataApiService.getOneBook(id).subscribe(book =>{
      this.book = book;
      console.log(this.book)
    });
  }

}
