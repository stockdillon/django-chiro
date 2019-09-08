import { AnimationService } from './../../core/services/animation/animation.service';
import { CommitWrapper } from './models/github.model';
import { HomeService } from '@core/services/home/home.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';
import { Observable, timer } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';

export class CommitDisplay {
  message: string;
  date: Date;
}

state('open', style({
  height: '200px',
  opacity: 1,
  backgroundColor: 'yellow'
}))

state('closed', style({
  height: '100px',
  opacity: 0.5,
  backgroundColor: 'green'
}))

@Component({
  selector: 'app-home',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '30px',
        opacity: 1,
        // backgroundColor: 'yellow',
        visibility: 'visible'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0.5,
        // backgroundColor: 'green',
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private homeService: HomeService,
    private animationService: AnimationService,
    private router: Router
  ) { }

  isOpenGithub = false;

  commits$: Observable<CommitWrapper[]>;
  // commitWrappers: CommitWrapper[];
  commitWrappers: CommitDisplay[];

  displayedColumns: string[] = ['date', 'comment'];
  dataSource: MatTableDataSource<any>;

  typeWriterPaused: boolean = false;
  remainingPauseTime: number = 3;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.commits$ = this.homeService.getCommits();
    const subscription = this.commits$.subscribe((result: CommitWrapper[]) => {
      this.commitWrappers = result.slice(0, result.length).map(_ => ({
        message: _.commit.message,
        date: new Date(_.commit.author.date)
      } as CommitDisplay));
      this.dataSource = new MatTableDataSource(this.commitWrappers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.commitWrappers);
    });
    // subscription.unsubscribe();

    timer(0, 50).subscribe(result => {
      this.typeWriter();
    });
  }

  // mapToDisplay()

  showGithubInfo(): void {
    this.isOpenGithub = !this.isOpenGithub;
    console.log(`Github info is ${this.isOpenGithub ? 'open' : 'closed'}`)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  i = 0;
  txt: string = 'Lorem ipsum dummy text blabla.';
  words: string[] = ['And... more!', 'Download my resume', 'Browse my portfolio', 'Read my blog posts', 'View my recent transactions'];
  wordIndex: number = 0;
  backspace: boolean = false;

  // TODO: rewrite this function...
  typeWriter() {
    this.txt = this.words[this.wordIndex];
    if (this.typeWriterPaused && this.remainingPauseTime > 0) {
      this.remainingPauseTime--;
      return;
    }

    document.getElementById("demo").innerHTML = this.txt.substr(0, this.i);

    if (this.i >= this.txt.length) this.backspace = true;
    if (this.i == 0) {
      this.backspace = false;
      this.wordIndex++;
      this.wordIndex = this.wordIndex % this.words.length;
    }

    if (this.i === this.txt.length && this.typeWriterPaused === false) {
      this.typeWriterPaused = true;
      this.remainingPauseTime = 10;
      return;
    }

    this.backspace ? this.i-- : this.i++;
    if (this.backspace) {
      this.typeWriterPaused = false;
    }
  }

  goToActivity() {
    console.log("Going to activity...")
    this.animationService.slideToRIGHT();
    this.router.navigateByUrl("activity");
  }  

}
