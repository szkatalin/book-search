import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BooksSearchComponent} from './books-search/books-search.component';
import {FavComponent} from './fav/fav.component';
import {BookDetailsComponent} from './book-details/book-details.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: BooksSearchComponent},
  {path: 'details/:isbn', component: BookDetailsComponent},
  {path: 'favourites', component: FavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
