import { HttpClient } from '@angular/common/http';
import { QuoteService } from 'src/app/services/quote.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuoteSnackBarComponent } from '../../material-components/quote-snack-bar.component';
import { Observable, timer } from 'rxjs';
import { trigger, transition, useAnimation, style, animate } from '@angular/animations';
import { slideInLeft, fadeIn, fadeInDown } from 'ng-animate';
import { TransactionHistory, Addressinfo, Amount, Buy, Datum, Details, Network, To } from 'src/app/models/coinbase.models';

// import { HostBinding } from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  transactions$: Observable<any>;
  transactions: TransactionHistory;
  transactionHistory: Datum[] = new Array<Datum>();
  displayedColumns: string[] = ['date', 'type', 'status', 'amount', 'currency'];
  dataSource = ELEMENT_DATA;
  constructor(
    private snackBar: MatSnackBar,
    private quoteServicer: QuoteService,
    http: HttpClient
  ) {
    this.http = http;
  }

  ngOnInit() {
    this.timer$ = timer(0, 5 * 1000);
    this.timer$.subscribe((i: number) => {
      // console.log(`Timer has gone off ${i} times`);
      // this.hidden = true;
      this.currentQuoteIndex = i % this.quotes.length;
      // $('#quoteText').fade;
      // this.hidden = false;
      // console.log(this.quotes[this.currentQuoteIndex]);
     }
    );
    this.transactions$ = this.http.get('api/coinbase/transactions');
    this.transactions$.subscribe((result: TransactionHistory) => {
      console.log(result.data);
      this.transactions = result;
      this.transactionHistory = result.data;
    });
    // this.http.get('api/coinbase/transactions').subscribe((result: any) => {console.log(result); this.transactions = result; });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(QuoteSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
