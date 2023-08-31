import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  createBookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    publishing_company: ['', Validators.required],
    release_year: [null, Validators.required],
    pages: [null, Validators.required]
  });

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  onSubmit() {
    console.log(this.createBookForm.value);

    const newBook: IBook = {
      id: nanoid(),
      title: this.createBookForm.value.title as string,
      author: this.createBookForm.value.author as string,
      publishing_company: this.createBookForm.value.publishing_company as string,
      release_year: this.createBookForm.value.release_year!,
      pages: this.createBookForm.value.pages!
    }

    try {
      this.bookService.create(newBook).subscribe(() => this.router.navigate(['/books/list']));
    }
    catch(exception) {
      throw exception;
    }
    
  }
}
