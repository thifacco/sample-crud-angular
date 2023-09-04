import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  message!: string;
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = BookService.message.subscribe(async (msg) => {
      this.message = msg;
      await setInterval(() => this.message = '', 3000);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
