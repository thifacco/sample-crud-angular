import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../book.service';
import { Book } from '../../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm!: FormGroup;
  bookId: string | undefined;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe({
      next: (data) => {
        if (typeof data.get('id') !== 'undefined') {
          this.bookId = data.get('id') || '';

          this.bookService.getById(this.bookId).subscribe({
            next: (data) => this.createForm(data),
            error: (err) => console.warn(err)
          })
        }
        else {
          this.createForm(new Book());
        }
      }
    });
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
    console.log(this.bookForm);
  }

  onSubmit() {
    console.log(this.bookForm.value);

    if (this.bookId) {
      // update
      this.bookService.update(this.bookForm.value).subscribe({
        next: () => {
          BookService.message.emit('Livro editado com sucesso!');
          this.router.navigate(['/crud-simple/books/list'])
        },
        error: (err) => console.warn(err)
      })
    }
    else {
      // create
      this.bookService.create(this.bookForm.value).subscribe({
        next: () => {
          BookService.message.emit('Livro criado com sucesso!');
          this.router.navigate(['/crud-simple/books/list'])
        },
        error: (err) => console.warn(err)
      });
    }
  }
}
