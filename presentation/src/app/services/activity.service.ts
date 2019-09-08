import { ExchangeRates } from './activity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActivityService implements OnInit {
  private transactions$: Observable<any>;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  // TODO: Move to Coinbase (core) service
  // TODO: Inject Coinbase service into this (activity) service
  getTransactions(): Observable<any> {
    return this.http.get('api/coinbase/transactions').pipe(
      share()
    );
  }

  // TODO: Move to Coinbase (core) service
  // TODO: Inject Coinbase service into this (activity) service
  getExchangeRates(): Observable<ExchangeRates> {
    // return this.http.get<ExchangeRates>('https://api.coinbase.com/v2/prices/BTC-USD/buy').pipe(
    return this.http.get<ExchangeRates>('https://api.coinbase.com/v2/exchange-rates').pipe(
      share()
    );
  }
}
