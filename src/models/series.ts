import { Book } from './book'
import { Author } from './author';

export interface Series {
    books: Book[];
    author: Author;
}