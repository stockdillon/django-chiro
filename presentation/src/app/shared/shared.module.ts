import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSearchDialogComponent } from './price-search-dialog/price-search-dialog.component';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TypeWriterPipe } from './pipes/type-writer.pipe';

@NgModule({
  declarations: [
    PriceSearchDialogComponent,
    PageHeaderComponent,
    TypeWriterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    PriceSearchDialogComponent,
    PageHeaderComponent,
    TypeWriterPipe
  ],
  entryComponents: [
    PriceSearchDialogComponent
  ]
})
export class SharedModule { }
