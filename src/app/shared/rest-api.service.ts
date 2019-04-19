import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // Define API
  apiURL = 'http://openlibrary.org/search.json';
  favouritesURL = 'http://localhost:3000/favs';

  // Define fields
  results: Book[] = [];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  // BOOK REST API
  search(term: string) {
    return new Promise((resolve, reject) => {
      const api = `${this.apiURL}?${term}`;
      this.http.get(api)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res.docs);
          },
          msg => {
            reject(msg);
          }
        );
    });
  }

  // FAKE BACKEND FOR FAVOURITES
  fetchFavourites() {
    return new Promise((resolve, reject) => {
      this.http.get(this.favouritesURL)
        .toPromise()
        .then(
          (res: any) => {
            resolve(res);
          },
          msg => {
            reject(msg);
          }
        );
    });
  }

  postFavourite(b: Book) {
    // TODO
  }

  deleteFavourites(isbn: string) {
    // TODO
  }

}

