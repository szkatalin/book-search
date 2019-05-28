import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md/';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Book} from '../shared/book';
import {FavService} from '../shared/fav.service';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit, AfterViewInit {
  // Table
  headElements = ['ISBN', 'Author', 'Title', 'Published', 'Like'];
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;

  // Search fields
  results: Book[] = [];
  previous: any = [];

  constructor(private cdRef: ChangeDetectorRef, public restApi: RestApiService, public favService: FavService) { }

  ngOnInit() { }

  async search(input: string) {
    this.results = [];
    const res: any = await this.restApi.search(input);
    console.log(res);
    res.map((item) => {
      this.results.push(new Book(item.isbn, item.author_name, item.title, item.first_publish_year));
    });

    // eredmények betöltése a táblázatba
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
