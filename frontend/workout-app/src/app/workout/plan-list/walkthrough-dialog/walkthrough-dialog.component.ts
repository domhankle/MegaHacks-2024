import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  ViewChild,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-walkthrough-dialog',
  templateUrl: './walkthrough-dialog.component.html',
  styleUrl: './walkthrough-dialog.component.scss',
})
export class WalkthroughDialogComponent implements AfterViewInit {
  @ViewChild('slidingContainer') slidingContainer?: ElementRef;
  private _slidingElement?: HTMLElement;
  public exerciseIndexInView: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<WalkthroughDialogComponent>
  ) {
    this.exerciseIndexInView = 0;
  }

  public ngAfterViewInit(): void {
    this._slidingElement = this.slidingContainer?.nativeElement;
  }

  public onNextClicked(): void {
    this.exerciseIndexInView++;
    const transformPercentage: number = 100 * this.exerciseIndexInView;
    this._slidingElement!.style.transform = `translateX(-${transformPercentage}%)`;
  }

  public onPreviousClicked(): void {
    this.exerciseIndexInView--;
    const transformPercentage: number = 100 * this.exerciseIndexInView;
    this._slidingElement!.style.transform = `translateX(-${transformPercentage}%)`;
  }

  public onWorkoutComplete(): void {
    this._dialogRef.close('complete');
  }
}
