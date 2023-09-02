import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, tap } from 'rxjs';
import { BookService } from '../../book.service';
import { Router } from '@angular/router';
import { Book } from '../../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {

  books!: Book[];
  subscription!: Subscription;

  bookList$ = this.bookService.getAll().pipe(
    tap(console.log),
    map((data) => this.books = data)
  );
  
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.bookList$.subscribe();
  }

  editBook(bookId: string) {
    this.router.navigate(['/books/edit', bookId]);
  }

  deleteBook(bookId: string) {
    this.bookService.delete(bookId).subscribe({
      next: () => {
        console.log('Livro excluído com sucesso');
        this.subscription = this.bookList$.subscribe();
      },
      error: (err) => console.warn(err)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
