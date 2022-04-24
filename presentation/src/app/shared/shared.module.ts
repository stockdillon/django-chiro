import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceSearchDialogComponent } from './price-search-dialog/price-search-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TypeWriterPipe } from './pipes/type-writer.pipe';
import { MatListModule } from '@angular/material/list';

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
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    PriceSearchDialogComponent,
    PageHeaderComponent,
    TypeWriterPipe,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  entryComponents: [
    PriceSearchDialogComponent
  ]
})
export class SharedModule { }
