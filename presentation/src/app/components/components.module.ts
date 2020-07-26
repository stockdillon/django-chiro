import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote/quote.component';
import { QuoteTickerComponent } from './quote/quote-ticker/quote-ticker.component';
import { QuoteSnackBarComponent } from './material-components/quote-snack-bar.component';
// import {MatCard} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { ChartModule } from 'angular2-chartjs';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './activity/chart/chart.component';
import { PageSummaryComponent } from './page-summary/page-summary.component';


@NgModule({
  declarations: [
    QuoteComponent,
    QuoteTickerComponent,
    QuoteSnackBarComponent,
    ChartComponent,
    PageSummaryComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    ChartModule,
    ChartsModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [
    QuoteComponent,
    QuoteTickerComponent,
    ChartComponent,
    PageSummaryComponent,
  ],
  entryComponents: [
    QuoteSnackBarComponent
  ]
})
export class ComponentsModule { }
