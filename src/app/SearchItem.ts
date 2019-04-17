export class SearchItem {
  keywords: string;
  author: string;
  title: string;
  isbn: string;

  constructor(k: string = '', a: string = '', t: string = '', i: string = '') {
    this.keywords = k.replace(/ /gi, '+');
    this.author = a.replace(' ', '+');
    this.title = t.replace(' ', '+');
    this.isbn = i.replace(' ', '+');
  }

  searchTerm() {
    let term = '';
    if (this.keywords !== '') {
      term += 'q=' + this.keywords;
    }

    if (this.author !== '') {
      term += '&' + this.author;
    }

    if (this.title !== '') {
      term += '&' + this.title;
    }

    if (this.isbn !== '') {
      term += '&' + this.isbn;
    }
    console.log(term);
    return term;
  }
}
