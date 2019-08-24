import { CoinPrice } from './activity.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { TransactionHistory, Transaction } from 'src/app/models/coinbase.models';
import { ActivityService } from 'src/app/services/activity.service';
import { ExchangeRates } from 'src/app/services/activity.model';
import { JsonPipe } from '@angular/common';
import { PriceSearchDialogComponent } from '@shared/price-search-dialog/price-search-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  transactions$: Observable<any>;
  prices$: Observable<any>;
  transactions: TransactionHistory;
  transactionHistory: Transaction[] = new Array<Transaction>();
  displayedColumns: string[] = ['date', 'type', 'status', 'amount', 'currency'];

  data: Array<any>;
  sellData: Array<any>;
  http: any;
  // pageDescription: string = `Here you can see what I\'ve been up to lately.
  // Shown below are my recent crypto-currency transactions.`;
  pageDescription: string = ``;

  searchingPrice: boolean = false;


  constructor(
    private activityService: ActivityService,
    public dialog: MatDialog
  ) {
    // this.transactions$ = this.activityService.getTransactions();
  }

  animal: string;
  name: string;
  searchedPrices: Array<CoinPrice> = [
    <CoinPrice>{ coinName: 'BTC', price: '1$'}
    ,<CoinPrice>{ coinName: 'LTC', price: '2$'}
  ];


  openDialog(): void {
    const dialogRef = this.dialog.open(PriceSearchDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }  

  ngOnInit() {
    this.transactions$ = this.activityService.getTransactions();
    this.transactions$.subscribe((result: TransactionHistory) => {
      this.data = result.data.filter(item => this.isBuy(item)).map(item => item.amount.amount);
      this.sellData = result.data.filter(item => !this.isBuy(item)).map(item => item.amount.amount);
      console.log(`data in activity component: ${this.data}`);
      this.transactions = result;
      this.transactionHistory = result.data;
    });

    this.prices$ = this.activityService.getExchangeRates();
    this.prices$.subscribe((result: ExchangeRates) => {
      console.log(`EXCHANGE RATES:`);
      console.log(result);
    });

    const source = timer(this.speed, this.speed);
    const subscribe = source.subscribe(val => this.typeWriter());
  }

  isBuy(transaction: Transaction): boolean {
    return transaction.type === 'buy';
  }


  i = 0;
  txt = 'Lorem ipsum dummy text blabla.';
  speed = 200;
  words = ['World!', 'Friend!!', 'There!!!'];
  wordIndex = 0;
  reverse: boolean = false;
  typeWriter() {
    if (this.i < this.words[this.wordIndex].length) {
      document.getElementById("demo").innerHTML += this.words[this.wordIndex].charAt(this.i);
      this.i++;
    }
    else {
      document.getElementById("demo").innerHTML = 'Hello ';
      this.reverse = !this.reverse;
      this.i = 0;
      this.wordIndex++;
      this.wordIndex = this.wordIndex % this.words.length;
    }
  }

}
