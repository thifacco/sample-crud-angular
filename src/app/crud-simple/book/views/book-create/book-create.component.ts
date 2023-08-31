import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../../book.service';
import { nanoid } from 'nanoid';
import { IBook } from '../../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  createBookForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    publishing_company: new FormControl(),
    release_year: new FormControl(),
    pages: new FormControl()
  });

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  onSubmit() {
    console.log(this.createBookForm.value);

    const newBook: IBook = {
      id: nanoid(),
      title: this.createBookForm.value.title,
      author: this.createBookForm.value.author,
      publishing_company: this.createBookForm.value.publishing_company,
      release_year: this.createBookForm.value.release_year,
      pages: this.createBookForm.value.pages
    }

    try {
      this.bookService.create(newBook).subscribe(() => this.router.navigate(['/books/list']));
    }
    catch(exception) {
      throw exception;
    }
    
  }
}
