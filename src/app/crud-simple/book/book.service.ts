import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly bookAPI = `${environment.databaseURL}/books`;

  public static message = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // erro no cliente ou rede
      console.error('Ops, ocorreu um erro:', error.error.message);
    } else {
      // erro no backend ou response body
      console.error(
        `Backend retornou erro código ${error.status}, ` +
        `Response body: ${error.error}`);
    }
    // retorna um observable com um user-facing error message
    return throwError(() => new Error('Something bad happened; please try again later.'));
  };

  getAll(): Observable<Book> {
    return this.http.get<Book>(this.bookAPI).pipe(
      catchError(this.handleError)
    );
  }

  getById(bookId: string) {
    return this.http.get<Book>(this.bookAPI + '/' + bookId).pipe(
      tap(console.log),
      catchError(this.handleError)
    );
  }

  create(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookAPI, book).pipe(
      catchError(this.handleError)
    );
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(this.bookAPI + '/' + book.id, book).pipe(
      catchError(this.handleError)
    );
  }

  delete(bookId: string) {
    return this.http.delete(this.bookAPI + '/' + bookId).pipe(
      catchError(this.handleError)
    );
  }
}
