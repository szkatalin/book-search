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
      if (term !== '') { term += '&'; }
      term += 'author=' + this.author;
    }

    if (this.title !== '') {
      if (term !== '') { term += '&'; }
      term += 'title=' + this.title;
    }

    if (this.isbn !== '') {
      if (term !== '') { term += '&'; }
      term += 'isbn=' + this.isbn;
    }
    // console.log(term);
    return term;
  }
}
