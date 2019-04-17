import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md/';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {RestApiService} from '../shared/rest-api.service';
import {Book} from '../shared/book';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.scss']
})
export class BooksSearchComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  elements: Book[] = [];
  previous: any = [];
  headElements = ['id', 'Author', 'Title', 'Published', 'Favourite'];
  private loading = false;
  constructor(private cdRef: ChangeDetectorRef, public restApi: RestApiService) { }

  ngOnInit() {
    // this.loadBooks('author=Tolkien');
  }

  // Get books list
 async loadBooks(input: string) {
   this.loading = true;
   // @ts-ignore
   const promise = this.restApi.search(' ').then(this.loading = false);
   this.elements = await promise;

   this.mdbTable.setDataSource(this.elements);
   this.elements = this.mdbTable.getDataSource();
   this.previous = this.mdbTable.getDataSource();
 }

  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(15);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
}
