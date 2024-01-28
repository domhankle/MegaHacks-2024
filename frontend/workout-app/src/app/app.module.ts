import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkoutModule } from './workout/workout.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WorkoutModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { panelClass: 'mat-dialog-override' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
