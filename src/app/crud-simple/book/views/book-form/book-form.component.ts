import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../book.service';
import { Book } from '../../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm(new Book());
  }

  createForm(book: Book) {
    this.bookForm = this.formBuilder.group({
      id: [book.id], 
      title: [book.title, Validators.required],
      author: [book.author, Validators.required],
      publishing_company: [book.publishing_company, Validators.required],
      release_year: [book.release_year, Validators.required],
      pages: [book.pages, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.bookForm.value);

    try {
      this.bookService.create(this.bookForm.value).subscribe(() => this.router.navigate(['/books/list']));
    }
    catch(exception) {
      throw exception;
    }
    
  }
}
