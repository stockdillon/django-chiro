import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

export class MenuItem {
  label: string;
  icon: string;
  link: string;

  constructor(label: string, icon: string, link?: string) {
    this.label = label;
    this.icon = icon;
    link ? this.link = link : this.link = '.';
  }
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'presentation';
  mobileQuery: MediaQueryList;
  shouldRun = true;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);


  // menuItems: Array<MenuItem> = new Array<MenuItem>( new MenuItem('Home', 'home'));;
  menuItems: Array<MenuItem> = [
     new MenuItem('Home', 'home', 'home'),
     new MenuItem('Activity', 'timeline', 'activity'),
     new MenuItem('Gallery', 'photo_library'),
     new MenuItem('About', 'info'),
     new MenuItem('Projects', 'computer'),
     new MenuItem('Blog', 'textsms', 'blog'),
     new MenuItem('Contact', 'perm_contact_calendar', 'contact'),
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

}
