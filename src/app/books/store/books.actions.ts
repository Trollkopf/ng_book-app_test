import { createActionGroup, props } from '@ngrx/store';
import { Book } from './books.model';

export const BookActions = createActionGroup({
  source: 'Books',
  events: {
    'add Book': props<{ bookId: string }>(),
    'remove Book': props<{ bookId: string }>(),
  },
});
export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
