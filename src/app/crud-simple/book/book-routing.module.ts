import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookCreateComponent } from './views/book-create/book-create.component';
import { BookListComponent } from './views/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
    children: [
      {
        path: 'list',
        component: BookListComponent
      },
      {
        path: 'create',
        component: BookCreateComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
