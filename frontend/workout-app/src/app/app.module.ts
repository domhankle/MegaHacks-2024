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
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    WorkoutModule,
    UserModule,
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
