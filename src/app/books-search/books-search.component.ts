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
  search: SearchItem;
  results: Book[] = [];
  previous: any = [];

  private loading = false;
  constructor(private cdRef: ChangeDetectorRef, public restApi: RestApiService) { }

  ngOnInit() {
    const example: SearchItem = new SearchItem('Prince');
    this.searchBooks(example);
  }

  // Get books list
 async searchBooks(input: SearchItem) {
   this.loading = true;
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

ngAfterViewInit() {
this.mdbTablePagination.setMaxVisibleItemsNumberTo(15);
this.mdbTablePagination.calculateFirstItemIndex();
this.mdbTablePagination.calculateLastItemIndex();
this.cdRef.detectChanges();
}
}
