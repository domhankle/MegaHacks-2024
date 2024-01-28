import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanComponent } from './workout-plan.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [WorkoutPlanComponent, AddWorkoutPlanComponent],
  exports: [WorkoutPlanComponent, AddWorkoutPlanComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
})
export class WorkoutModule {}
