import { Component, Inject, Input } from '@angular/core';
import { Exercise } from '../../types';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { WalkthroughDialogComponent } from '../walkthrough-dialog/walkthrough-dialog.component';

@Component({
  selector: 'app-start-walkthrough',
  templateUrl: './start-walkthrough.component.html',
  styleUrl: './start-walkthrough.component.scss',
})
export class StartWalkthroughComponent {
  @Input() public exercises: Exercise[];
  @Input() public planName: string;

  constructor(
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private _data: any
  ) {
    this.exercises = [];
    this.planName = '';
  }

  public openDialog(): void {
    const dialogRef = this._dialog.open(WalkthroughDialogComponent, {
      disableClose: true,
      minHeight: '90vh',
      width: '80vw',
      data: {
        exercises: this.exercises,
        title: this.planName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
