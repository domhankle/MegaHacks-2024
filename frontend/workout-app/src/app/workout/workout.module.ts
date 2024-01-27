import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanComponent } from './workout-plan.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WorkoutPlanComponent],
  exports: [WorkoutPlanComponent],
  imports: [CommonModule, HttpClientModule],
})
export class WorkoutModule {}
