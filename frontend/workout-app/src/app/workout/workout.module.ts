import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPlanComponent } from './workout-plan.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AddWorkoutPlanComponent } from './add-workout-plan/add-workout-plan.component';
import { MaterialModule } from '../material/material.module';
import { PlanListComponent } from './plan-list/plan-list.component';
import { StartWalkthroughComponent } from './plan-list/start-walkthrough/start-walkthrough.component';
import { WorkoutPlan } from './types';
import { WalkthroughDialogComponent } from './plan-list/walkthrough-dialog/walkthrough-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    WorkoutPlanComponent,
    AddWorkoutPlanComponent,
    PlanListComponent,
    StartWalkthroughComponent,
    WalkthroughDialogComponent,
  ],
  exports: [WorkoutPlanComponent, AddWorkoutPlanComponent, PlanListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class WorkoutModule {}
