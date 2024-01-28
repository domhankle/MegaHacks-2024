import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from '../types';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrl: './plan-list.component.scss',
})
export class PlanListComponent implements OnInit {
  public plans: WorkoutPlan[];

  constructor(private _workService: WorkoutService) {
    this.plans = [];
    this._workService.plans.subscribe((newValue) => {
      this.plans = newValue;
    });
  }

  ngOnInit(): void {
    this._workService.getWorkoutPlans().subscribe(
      (data) => {
        this.plans = data;
      },
      (error) => {
        console.log('Failed to get plans!');
      }
    );
  }
}
