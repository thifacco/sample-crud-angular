import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IBook } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly dbHostBooks = `${environment.databaseURL}/books`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<IBook> {
    return this.http.get<IBook>(this.dbHostBooks);
  }
}
