import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote/quote.component';
import { QuoteTickerComponent } from './quote/quote-ticker/quote-ticker.component';

@NgModule({
  declarations: [QuoteComponent, QuoteTickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    QuoteComponent,
    QuoteTickerComponent,
  ]
})
export class ComponentsModule { }
