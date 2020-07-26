import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'price-search-dialog',
  templateUrl: 'price-search-dialog.component.html',
})
export class PriceSearchDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PriceSearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
