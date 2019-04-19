import {HttpClient} from '@angular/common/http';

export class Book {
  isbn: string;
  author_name: string;
  title: string;
  first_publish_year: number;

  constructor(i: string, a: string, t: string, p: number) {
    this.isbn = i;
    this.author_name = a;
    this.title = t;
    this.first_publish_year = p;
  }
}
