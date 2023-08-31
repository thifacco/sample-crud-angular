import { Component } from '@angular/core';
import { BookService } from './book.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  bookList$ = this.bookService.getAll().pipe(
    tap(console.log)
  );
  
  constructor(private bookService: BookService) {}


}
