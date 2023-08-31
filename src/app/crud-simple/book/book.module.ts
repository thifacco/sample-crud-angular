import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookListComponent } from './views/book-list/book-list.component';
import { BookCreateComponent } from './views/book-create/book-create.component';
import { BookService } from './book.service';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BookRoutingModule,
    MatTableModule
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
