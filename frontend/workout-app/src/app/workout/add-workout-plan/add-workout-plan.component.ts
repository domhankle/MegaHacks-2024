import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutPlanComponent } from '../workout-plan.component';
import { WorkoutService } from '../workout.service';
@Component({
  selector: 'app-add-workout-plan',
  templateUrl: './add-workout-plan.component.html',
  styleUrl: './add-workout-plan.component.scss',
})
export class AddWorkoutPlanComponent {
  constructor(
    private _dialog: MatDialog,
    private _workoutService: WorkoutService
  ) {}

  public openCreateWorkoutPlanDialog(): void {
    const dialogRef = this._dialog.open(WorkoutPlanComponent, {
      disableClose: true,
      minHeight: '90vh',
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._workoutService.createWorkoutPlan(result).subscribe(
          (result) => {
            console.log('Successfully POSTed the Workout Plan: ', result);
          },
          (error) => {
            console.log('Failed to POST the Workout Plan: ', error);
          }
        );
      } else {
        console.log('No POST was requested.');
      }
    });
  }
}
