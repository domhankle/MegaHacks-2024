import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkoutPlanComponent } from '../workout-plan.component';
import { WorkoutService } from '../workout.service';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-add-workout-plan',
  templateUrl: './add-workout-plan.component.html',
  styleUrl: './add-workout-plan.component.scss',
})
export class AddWorkoutPlanComponent {
  private _currentUserId?: number;
  constructor(
    private _dialog: MatDialog,
    private _workoutService: WorkoutService,
    private _userService: UserService
  ) {
    this._currentUserId = this._userService.id;
    this._userService.currentUserId.subscribe((newValue) => {
      this._currentUserId = newValue;
    });
  }

  public openCreateWorkoutPlanDialog(): void {
    const dialogRef = this._dialog.open(WorkoutPlanComponent, {
      disableClose: true,
      minHeight: '90vh',
      width: '80vw',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('RESULT AFTER ATTEMPTING TO CREATE USER: ', result);
      console.log('Current Active User: ', this._currentUserId);
      if (result && this._currentUserId) {
        result.userid = this._currentUserId;
        this._workoutService.createWorkoutPlan(result).subscribe(
          (result) => {
            console.log('getting all workout plans for ', this._currentUserId);
            this._workoutService
              .getWorkoutPlans(this._currentUserId!)
              .subscribe(
                (data) => {
                  this._workoutService.setPlans(data);
                },
                (error) => {
                  console.log('Failed to refetch all plans!');
                }
              );
          },
          (error) => {
            console.log('Failed to POST new plan!');
          }
        );
      } else {
        console.log('No POST was requested.');
      }
    });
  }
}
