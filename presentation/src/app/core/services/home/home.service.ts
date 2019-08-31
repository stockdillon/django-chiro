import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommitWrapper } from 'src/app/pages/activity/github.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

  getCommits(): Observable<CommitWrapper[]> {
    return this.http.get<CommitWrapper[]>('https://api.github.com/repos/stockdillon/django-chiro/commits');
  }  
}
