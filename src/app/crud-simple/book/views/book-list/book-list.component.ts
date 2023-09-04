import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, map, tap } from 'rxjs';
import { BookService } from '../../book.service';
import { Router } from '@angular/router';
import { Book } from '../../book';
import { MatDialog } from '@angular/material/dialog';

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
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscription = this.bookList$.subscribe();
  }

  editBook(bookId: string) {
    this.router.navigate(['/crud-simple/books/edit', bookId]);
  }

  deleteBook(bookId: string) {
    if (confirm('Você deseja excluir esse livro?') == true) {
      this.bookService.delete(bookId).subscribe({
        next: () => {
          BookService.message.emit('Livro excluído com sucesso!');
          this.subscription = this.bookList$.subscribe();
        },
        error: (err) => console.warn(err)
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
