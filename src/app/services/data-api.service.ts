import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  public booksCollection: AngularFirestoreCollection<Book>;
  public books: Observable<Book[]>;
  public bookDoc: AngularFirestoreDocument<Book>;
  public boock: Observable<Book>

  constructor(private _afs: AngularFirestore) {

    this.booksCollection = this._afs.collection('books');
    this.books = this.booksCollection.valueChanges();

  }

  getAllBooks() {
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Book;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneBook(id) {
    this.bookDoc = this._afs.doc(`books/${id}`)
    return this.boock = this.bookDoc.snapshotChanges()
      .pipe(map(action => {
        if (action.payload.exists == false) {
          return null;
        }
        else {
          const data = action.payload.data() as Book;
          data.id = action.payload.id;
          return data;
        }
      }));
  }

  addBook(book) {
    this.booksCollection.add(book);
  }

  updateBook(book) {
    let idBook = book.id;
    this.bookDoc = this._afs.doc(`books/${idBook}`);
    this.bookDoc.update(book);
  }

  deleteBook(book) {
    let idBook = book.id;
    this.bookDoc = this._afs.doc(`books/${idBook}`);
    this.bookDoc.delete();
  }
}
