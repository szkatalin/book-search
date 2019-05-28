import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // Define API
  apiURL = 'https://openlibrary.org/search.json';

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

}

