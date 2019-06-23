import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/services/quote.service';


@Component({
  selector: 'quote-snack-bar',
  templateUrl: 'quote-snack-bar.component.html',
  styles: [`
    .example-pizza-party {
      color: #bf59f9;
    }
  `],
})
export class QuoteSnackBarComponent {
  // quoteService: QuoteService;
  constructor(private quoteService: QuoteService) {
    // this.quoteService = quoteService;
  }
}
