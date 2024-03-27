import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectBookCollection,
  selectBooks,
} from './books/store/books.selectors';
import { BookActions, BooksApiActions } from './books/store/books.actions';
import { GoogleBookService } from './books/services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private booksService: GoogleBookService, private store: Store) {}

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(BookActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BookActions.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
