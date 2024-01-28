import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { WorkoutModule } from './workout/workout.module';
import { UserModule } from './user/user.module';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: UserSignInComponent },
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule,
    WorkoutModule,
    UserModule,
  ],
  exports: [RouterModule, MaterialModule],
})
export class AppRoutingModule {}
