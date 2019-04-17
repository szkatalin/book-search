export class Book {
  id: number;
  author_name: string;
  title: string;
  first_publish_year: number;

  constructor(a: string, t: string, p: number) {
    this.author_name = a;
    this.title = t;
    this.first_publish_year = p;
  }
}
