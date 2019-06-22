import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Post } from '../blog.models';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  durationInSeconds = 2;
  @Input() post: Post;
  constructor(
    private _snackBar: MatSnackBar
  ) { }

  // @ViewChild('autosize') autosize: CdkTextareaAutosize;


  ngOnInit() {
  }

  clicked() {
    console.log('comment submitted!');
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
