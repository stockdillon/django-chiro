import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamPickerService {

  constructor(private http: HttpClient) { }

  getTeams(names: string[]): Observable<any>{
    let qString: string = '?grp=3';
    qString += `&items=${names.join('+')}`;
    return this.http.get(`https://www.randomlists.com/team-generator${qString}`);
  }
}
