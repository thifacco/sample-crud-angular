import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookListComponent } from './views/book-list/book-list.component';
import { BookFormComponent } from './views/book-form/book-form.component';
import { BookService } from './book.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    MatTableModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
