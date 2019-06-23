import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuoteSnackBarComponent } from '../../material-components/quote-snack-bar.component';
import {MatCard, MatCardHeader, MatCardTitle} from '@angular/material/card';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-quote-ticker',
  templateUrl: './quote-ticker.component.html',
  styleUrls: ['./quote-ticker.component.css']
})
export class QuoteTickerComponent implements OnInit {
  quotes = [
    'If I have seen futher, it is by standing on the shoulders of giants. - Sir Isaac Newton',
    'There is nothing quite so useless, as doing with great efficiency, something that should not be done at all. - Peter Drucker',
    'If your only tool is a hammer, every problem looks like a nail. - Anon',
  ];
  currentQuoteIndex = 0;
  durationInSeconds = 5;
  timer$: Observable<any>;
  constructor(
    private snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.timer$ = timer(0, 5 * 1000);
    this.timer$.subscribe((i: number) => {
      // console.log(`Timer has gone off ${i} times`);
      this.currentQuoteIndex = i % this.quotes.length;
      console.log(this.quotes[this.currentQuoteIndex]);
     }
    );
  }

  openSnackBar() {
    this.snackBar.openFromComponent(QuoteSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
