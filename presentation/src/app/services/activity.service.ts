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

}
