import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-confim-dialog',
  templateUrl: './confim-dialog.component.html',
  styles: [
  ]
})
export class ConfimDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfimDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {}

  deletedHeroe(): void {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }

}
