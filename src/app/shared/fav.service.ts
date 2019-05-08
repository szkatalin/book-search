import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private favs: Book[] = [];

  constructor() { }

  getFavs() {
    return this.favs;
  }

  addFav(book: Book) {
    this.favs.push(book);
  }

  deleteFav(book: Book) {
    this.favs.splice(this.favs.findIndex(x => x === book), 1);
  }

  manageFavourites = (book: Book) => {
    if (this.favs.findIndex(x => x.isbn === book.isbn && x.title === book.title && x.first_publish_year === book.first_publish_year) === -1) {
      this.addFav(book);
    } else {
      this.deleteFav(book);
    }
  }
}
