import {Component, OnInit, ViewChild} from '@angular/core';
import {FavService} from '../shared/fav.service';
import {MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {Book} from '../shared/book';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.scss']
})
export class FavComponent implements OnInit {
  // Table
  headElements = ['ISBN', 'Author', 'Title', 'Published', 'Like'];
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;

  favs: Book[];
  previous: any[];

  constructor(public favService: FavService) {
    this.favs = this.favService.getFavs();
  }

  ngOnInit() {
    this.mdbTable.setDataSource(this.favService.getFavs());
    this.favs = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();
  }

}
