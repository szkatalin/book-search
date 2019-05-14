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
    if (!this.contains(book)) {
      this.addFav(book);
    } else {
      this.deleteFav(book);
    }
  }

  contains(b: Book): boolean {
    if (this.favs.findIndex(x => x.isbn === b.isbn && x.title === b.title && x.first_publish_year === b.first_publish_year) === -1) {
      return false;
    } else {
      return true;
    }
  }
}
