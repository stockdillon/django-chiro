import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() pageTitle: string;
  constructor() { }

  ngOnInit() {
    this.pageTitle = document.location.pathname.split("/")[1];
  }

}
