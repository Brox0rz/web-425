/**
 * Title: books.service.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/21/2024
 * Description: Service for managing book data with functions to fetch all books or a specific book by ISBN.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Import Observable operator from rxjs
import { of } from 'rxjs'; // Import of operator from rxjs
import { map } from 'rxjs/operators'; // Import map operator from rxjs
import { IBook } from './book.interface'; // Import the IBook interface

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // Array of book objects of type IBook
  books: Array<IBook>;

  constructor() {
    this.books = [
    {
      isbn: '978-3-16-148410-0',
      title: 'Raptor Red',
      authors: ['Robert T. Bakker'],
      description: 'Explore the Cretaceous Period through a 3rd-person account of a velociraptor life.',
      numOfPages: 200
    },
    {
      isbn: '978-3-16-148410-1',
      title: 'Speaker for the Dead',
      authors: ['Orson Scott Card'],
      description: 'Set years after "Ender\'s Game." The story follows Ender Wiggin, now a Speaker for the Dead, as he seeks to understand and truthfully recount the lives of the recently deceased, amidst the complex relations between humans and an alien species on the planet Lusitania.',
      numOfPages: 250
    },
    {
      isbn: '978-3-16-148410-2',
      title: 'Spaceland',
      authors: ['Rudy Rucker'],
      description: 'A novel of the fourth dimension that provides a unique perspective on the complexities and intrigues of higher-dimensional spaces.',
      numOfPages: 300
    },
    {
      isbn: '978-3-16-148410-3',
      title: 'Slaughterhouse-Five',
      authors: ['Kurt Vonnegut'],
      description: 'A satirical novel about World War II experiences and journeys through time of Billy Pilgrim, its non-heroic protagonist.',
      numOfPages: 350
    },
    {
      isbn: '978-3-16-148410-4',
      title: 'The Lord of the Rings',
      authors: ['J.R.R. Tolkien'],
      description: 'An epic fantasy novel, which follows the quest to destroy a powerful ring that could determine the fate of the world.',
      numOfPages: 400
    }
  ]
}

  // Return an Observable of the array of books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Return a single IBook object by ISBN
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
