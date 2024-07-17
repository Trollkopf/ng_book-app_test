import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { booksReducer } from './books/store/books.reducer';
import { collectionReducer } from './books/store/collection.reducer';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        BookListComponent,
        BookCollectionComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ books: booksReducer, collection: collectionReducer })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
