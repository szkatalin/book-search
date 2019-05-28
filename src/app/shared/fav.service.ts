import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class FavService {
  private favs: Book[] = [];

  constructor() {}

  // visszadja a kedvenceket
  getFavs() {
    return this.favs;
  }

  // hozzáadja a könyvet
  addFav(book: Book) {
    this.favs.push(book);
  }

  // kitörli a könyvet a kedvencek közül, ha benne van
  deleteFav(book: Book) {
    this.favs.splice(this.favs.findIndex(x => x === book), 1);
  }

  // Sziveckére kattintás hatására,
  // ha a kedvencek között van akkor kiszedi
  // ha nincs akkor berakja
  manageFavourites = (book: Book) => {
    if (!this.contains(book)) {
      this.addFav(book);
    } else {
      this.deleteFav(book);
    }
  }

  // megnézi, hogy egy adott könyv a kedvencek között van-e
  contains(b: Book): boolean {
    if (
      this.favs.findIndex(
        x =>
          x.isbn === b.isbn &&
          x.title === b.title &&
          x.first_publish_year === b.first_publish_year
      ) === -1
    ) {
      return false;
    } else {
      return true;
    }
  }
}
