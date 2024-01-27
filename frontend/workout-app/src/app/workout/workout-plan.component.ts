import { Component, OnInit } from '@angular/core';

import { WorkoutService } from './workout.service';
import { WorkoutPlan } from './types';
import { response } from 'express';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrl: './workout-plan.component.scss',
})
export class WorkoutPlanComponent implements OnInit {
  constructor(private _workoutService: WorkoutService) {}

  public ngOnInit(): void {
    let data: WorkoutPlan = {
      name: "Dom's Workout Plan",
      exercises: [{ name: 'Push-up', sets: 10, reps: 30 }],
    };
    this._workoutService.createWorkoutPlan(data).subscribe(
      (response) => {
        console.log('Succes! ', response);
      },
      (error) => {
        console.log('Error! ', response);
      }
    );
  }
}
