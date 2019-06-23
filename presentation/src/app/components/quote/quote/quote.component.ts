import { Component, OnInit, Input } from '@angular/core';
// import {QuoteSnackBarComponent} from '../../material-components/quote-snack-bar.component';
import {QuoteSnackBarComponent} from '../../material-components/quote-snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input()
  quote = '';
  durationInSeconds = 5;
  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  openSnackBar() {
    this.snackBar.openFromComponent(QuoteSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
