import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanComponent } from './workout-plan.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

@NgModule({
  declarations: [WorkoutPlanComponent],
  exports: [WorkoutPlanComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFToken',
    }),
  ],
})
export class WorkoutModule {}
