import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  bookList$ = this.bookService.getAll().pipe(
    tap(console.log)
  );
  
  constructor(private bookService: BookService) {}

  deleteBook(bookId: string) {
    this.bookService.delete(bookId).subscribe({
      next: () => console.log('Livro excluído com sucesso'),
      error: (err) => console.warn(err)
    })
  }
}
