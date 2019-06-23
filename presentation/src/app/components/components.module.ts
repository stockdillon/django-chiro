import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote/quote.component';
import { QuoteTickerComponent } from './quote/quote-ticker/quote-ticker.component';
import { QuoteSnackBarComponent } from './material-components/quote-snack-bar.component';
// import {MatCard} from '@angular/material/card';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    QuoteComponent,
    QuoteTickerComponent,
    QuoteSnackBarComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    QuoteComponent,
    QuoteTickerComponent,
  ],
  entryComponents: [
    QuoteSnackBarComponent
  ]
})
export class ComponentsModule { }
