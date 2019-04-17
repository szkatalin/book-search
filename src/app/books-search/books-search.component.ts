import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md/';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Book} from '../shared/book';
import {SearchItem} from '../SearchItem';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit, AfterViewInit {
  // Table
  headElements = ['id', 'Author', 'Title', 'Published', 'Like'];
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;

  // Search fields
  searchItem: SearchItem = new SearchItem();
  results: Book[] = [];
  previous: any = [];

  constructor(private cdRef: ChangeDetectorRef, public restApi: RestApiService) { }

  ngOnInit() { }

  // Get books list
 async complexBookSearch(input: SearchItem) {
   const promise = this.restApi.search(input.searchTerm());
   await promise.then( (res: []) => {
     res.map((item: Book) => {
       this.results.push(new Book(item.author_name, item.title, item.first_publish_year));
     });
     }
   );
   // console.log(this.results);
   this.mdbTable.setDataSource(this.results);
   this.results = this.mdbTable.getDataSource();
   this.previous = this.mdbTable.getDataSource();
}

  async search(input: string) {
    const promise = this.restApi.search(input);
    await promise.then( (res: []) => {
        res.map((item: Book) => {
          this.results.push(new Book(item.author_name, item.title, item.first_publish_year));
        });
      }
    );
    console.log(this.results);
    this.mdbTable.setDataSource(this.results);
    this.results = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(15);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  simpleSearch(value: string, s: string) {
    this.results = [];
    this.search(value + '=' + s.replace(/ /g, '+'));
  }

  complexSearch(k: string, a: string, t: string, i: string) {
    this.results = [];

    this.searchItem.keywords = k;
    this.searchItem.author = a;
    this.searchItem.title = t;
    this.searchItem.isbn = i;

    this.complexBookSearch(this.searchItem);
  }
}
