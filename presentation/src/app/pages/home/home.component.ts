import { CommitWrapper } from './../activity/github.model';
import { HomeService } from '@core/services/home/home.service';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Observable } from 'rxjs';

export class CommitDisplay {
  message: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService ) {
  }

  commits$: Observable<CommitWrapper[]>;
  // commitWrappers: CommitWrapper[];
  commitWrappers: CommitDisplay[];

  ngOnInit() {
    this.commits$ = this.homeService.getCommits();
    this.commits$.subscribe((result: CommitWrapper[]) => {
      // this.commitWrappers = result.slice(0, 5);
      this.commitWrappers = new Array<CommitDisplay>();
      console.log("commits");
      result.slice(0, 5).forEach(commitWrapper => {
        const date = new Date(commitWrapper.commit.author.date);
        const dateString = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
        console.log([commitWrapper.commit.message, dateString]);
        this.commitWrappers.push({message: commitWrapper.commit.message, date: date} as CommitDisplay)
      });
    });
  }

}
