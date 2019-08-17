import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-summary',
  templateUrl: './page-summary.component.html',
  styleUrls: ['./page-summary.component.css']
})
export class PageSummaryComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit() {
  }

}
