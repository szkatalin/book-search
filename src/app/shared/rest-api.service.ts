import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  // Define API
  apiURL = 'http://openlibrary.org/search.json';

  // Define fields
  results: Book[] = [];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      const api = `${this.apiURL}?author=tolkien`;
      this.http.get(api)
        .toPromise()
        .then(
          (res: any) => {
            console.log(res.docs);
            this.results = res.docs.map(item => {
              return new Book(
                item.author_name[0],
                item.title,
                item.first_publish_year
              );
            });
            resolve(this.results);
          },
          msg => {
            reject(msg);
          }
        );
    });
  }
}

