import { Component, OnInit } from '@angular/core';

import { WorkoutService } from './workout.service';
import { Exercise, WorkoutPlan } from './types';
import { response } from 'express';
import { error } from 'console';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrl: './workout-plan.component.scss',
})
export class WorkoutPlanComponent {
  public planToPost: WorkoutPlan;
  public exercises: Exercise[];
  public currentPlanName?: string;
  public currentExerciseName?: string;
  public currentExerciseReps?: number;
  public currentExerciseSets?: number;

  constructor(private _dialog: MatDialogRef<WorkoutPlanComponent>) {
    this.exercises = [];
    this.planToPost = { name: '', exercises: [] };
  }

  public onCreateClose(): void {
    if (this.exercises.length <= 0) {
      this.onCancelClose();
    }
    if (this.currentPlanName) {
      this.planToPost.exercises = this.exercises;
      this.planToPost.name = this.currentPlanName;
      this._dialog.close(this.planToPost);
    } else {
      return;
    }
  }

  public onCancelClose(): void {
    this._dialog.close(undefined);
  }

  public onAddExercise(): void {
    if (
      this.currentExerciseName &&
      this.currentExerciseReps &&
      this.currentExerciseSets
    ) {
      this.exercises.push({
        name: this.currentExerciseName,
        reps: this.currentExerciseReps,
        sets: this.currentExerciseSets,
      });

      this.currentExerciseName = undefined;
      this.currentExerciseReps = undefined;
      this.currentExerciseSets = undefined;
    }
  }
}
