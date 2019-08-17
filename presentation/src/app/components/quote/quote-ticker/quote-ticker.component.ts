import { HttpClient } from '@angular/common/http';
import { QuoteService } from 'src/app/services/quote.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuoteSnackBarComponent } from '../../material-components/quote-snack-bar.component';
import { Observable, timer } from 'rxjs';
import { trigger, transition, useAnimation, style, animate } from '@angular/animations';
import { slideInLeft, fadeIn, fadeInDown } from 'ng-animate';

// import { HostBinding } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

@Component({
  selector: 'app-quote-ticker',
  templateUrl: './quote-ticker.component.html',
  styleUrls: ['./quote-ticker.component.css'],
  animations: [
    trigger(
      'slideInRight',
      [
        transition(
          ':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({transform: 'translateX(0)', opacity: 1}),
            animate('0ms', style({transform: 'translateX(-100%)', opacity: 0}))
          ]
        )
      ])
    // trigger('fadeInDown', [
    //   transition('* => *', useAnimation(fadeInDown, {params: {timing: 1.5}})),
    // ])
  ],
})
export class QuoteTickerComponent implements OnInit {
  quotes = [
    'If I have seen further, it is by standing on the shoulders of giants. - Sir Isaac Newton',
    'There is nothing quite so useless as doing with great efficiency what should not be done at all. - Peter Drucker',
    'If your only tool is a hammer, every problem looks like a nail. - Anon',
  ];
  http: HttpClient;
  currentQuoteIndex = 0;
  durationInSeconds = 5;
  timer$: Observable<any>;
  hidden: boolean;

  paused: boolean = false;

  constructor(
    private snackBar: MatSnackBar,
    private quoteService: QuoteService,
    http: HttpClient
  ) {
    this.http = http;
  }


  ngOnInit() {
    this.timer$ = timer(0, 5 * 1000);
    this.timer$.subscribe((i: number) => {
      // console.log(`Timer has gone off ${i} times`);
      // this.hidden = true;
      if (!this.paused) {
        this.currentQuoteIndex = i % this.quotes.length;
      }
      // $('#quoteText').fade;
      // this.hidden = false;
      // console.log(this.quotes[this.currentQuoteIndex]);
     }
    );

    // this.http.get('api/coinbase/transactions').subscribe((result: any) => {console.log(result); this.transactions = result; });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(QuoteSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
