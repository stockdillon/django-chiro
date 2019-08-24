import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSearchDialogComponent } from './price-search-dialog/price-search-dialog.component';
import { MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    PriceSearchDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],
  exports: [
    PriceSearchDialogComponent
  ],
  entryComponents: [
    PriceSearchDialogComponent
  ]
})
export class SharedModule { }
