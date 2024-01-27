import { Component, OnInit } from '@angular/core';

import { WorkoutService } from './workout.service';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrl: './workout-plan.component.scss',
})
export class WorkoutPlanComponent implements OnInit {
  constructor(private _workoutService: WorkoutService) {}

  public ngOnInit(): void {
    this._workoutService.getWorkoutPlan(1).subscribe((data) => {
      console.log(data);
    });
  }
}
