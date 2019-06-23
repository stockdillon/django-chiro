import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quote: string = 'this is only a test';
  constructor() {
    this.quote = 'Testing quote service';
  }
}
