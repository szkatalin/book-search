import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MDBRootModule, MdbTablePaginationComponent, MdbTableService} from 'angular-bootstrap-md';

// Routing module
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { FavComponent } from './fav/fav.component';
import { HomeComponent } from './home/home.component';

// HttpClient module for REST API
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooksSearchComponent,
    FavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBRootModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MdbTableService, MdbTablePaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
