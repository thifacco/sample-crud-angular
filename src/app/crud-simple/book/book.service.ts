import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly bookAPI = `${environment.databaseURL}/books`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IBook> {
    return this.http.get<IBook>(this.bookAPI);
  }

  create(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(this.bookAPI, book);
  }
}
