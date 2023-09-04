import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((routes) => routes.HomeModule)
  },
  {
    path: 'crud-simple/books',
    loadChildren: () => import('./crud-simple/book/book.module').then((routes) => routes.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
