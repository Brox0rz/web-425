/**
 * Title: book-list.component.ts
 * Authors: Professor Richard Krasso and Brock Hemsouvanh
 * Date: 4/21/2024
 * Description: Book List component to display and interact with a list of books.
 */

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'; // Service to handle book data operations
import { IBook } from '../book.interface'; // Interface representing a book
import { Observable } from 'rxjs'; // Observable for managing asynchronous data
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>; // Observable array of books
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']; // Table headers
  book: IBook; // Variable to hold book details

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    // Fetch books from the service on component initialization
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  // Function to show book details based on ISBN
showBookDetails(isbn: string) {
  this.book = this.booksService.getBook(isbn);
  console.log(this.book); // Log the book details to verify the service is returning correct data

  const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
    data: { book: this.book },
    disableClose: true,
    width: '800px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'confirm') {
      this.book = null;
      }
    });
  }
}
