import { Component } from '@angular/core';
import {Book} from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-search';
  favourites: Book[];
}
