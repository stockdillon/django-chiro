import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionHistory, Datum } from 'src/app/models/coinbase.models';
import { HttpClient } from '@angular/common/http';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  transactions$: Observable<any>;
  transactions: TransactionHistory;
  transactionHistory: Datum[] = new Array<Datum>();
  displayedColumns: string[] = ['date', 'type', 'status', 'amount', 'currency'];

  data: Array<any>;
  http: any;
  pageDescription: string = `Here you can see what I\'ve been up to lately.
  Shown below is my recent crypto-currency transactions and more.`;


  constructor(
    private activityService: ActivityService
  ) {
    // this.transactions$ = this.activityService.getTransactions();
  }

  ngOnInit() {
    // this.transactions$ = this.http.get('api/coinbase/transactions');

    this.transactions$ = this.activityService.getTransactions();
    this.transactions$.subscribe((result: TransactionHistory) => {
    // this.transactions$.subscribe((result: TransactionHistory) => {
      this.data = result.data.map(item => item.amount.amount);
      console.log(`data in activity component: ${this.data}`);
      this.transactions = result;
      this.transactionHistory = result.data;
    });
  }

}
