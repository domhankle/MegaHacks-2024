import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from '../types';
import { WorkoutService } from '../workout.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss',
})
export class PlanListComponent implements OnInit {
  public plans: WorkoutPlan[];
  private _currentUserId?: number;
  constructor(
    private _workService: WorkoutService,
    private _userService: UserService
  ) {
    this.plans = [];
    this._workService.plans.subscribe((newValue) => {
      this.plans = newValue;
    });
    this._userService.currentUserId.subscribe((newValue) => {
      this._currentUserId = newValue;
    });
    this._currentUserId = this._userService.id;
  }

  ngOnInit(): void {
    this._workService.getWorkoutPlans(this._currentUserId!).subscribe(
      (data) => {
        this.plans = data;
      },
      (error) => {
        console.log('Failed to get plans!');
      }
    );
  }

  public deletePlan(id?: number): void {
    if (id && this._currentUserId) {
      this._workService.deleteWorkoutPlan(this._currentUserId, id).subscribe(
        (result) => {
          console.log('Successful DELETE of id: ', id);
          this._workService.getWorkoutPlans(this._currentUserId!).subscribe(
            (data) => {
              this._workService.setPlans(data);
            },
            (error) => {
              console.log('Failed to fetch the plans');
            }
          );
        },
        (error) => {
          console.log('Failed to DELETE id: ', id);
        }
      );
    }
  }
}
