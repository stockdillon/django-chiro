import { CommitWrapper } from '../pages/activity/github.model';
import { ExchangeRates } from './activity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActivityService implements OnInit{
  private transactions$: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getTransactions(): Observable<any> {
    return this.http.get('api/coinbase/transactions').pipe(
      share()
    );
  }

  getExchangeRates(): Observable<ExchangeRates> {
    // return this.http.get<ExchangeRates>('https://api.coinbase.com/v2/prices/BTC-USD/buy').pipe(
    return this.http.get<ExchangeRates>('https://api.coinbase.com/v2/exchange-rates').pipe(
      share()
    );
  }

  getCommits(): Observable<CommitWrapper[]> {
    return this.http.get<CommitWrapper[]>('https://api.github.com/repos/stockdillon/django-chiro/commits');
  }
}
