import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book.component';
import { BookFormComponent } from './views/book-form/book-form.component';
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
        component: BookFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
