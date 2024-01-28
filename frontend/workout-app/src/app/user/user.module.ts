import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { CreateAccountDialogComponent } from './user-sign-in/create-account-dialog/create-account-dialog.component';
import { UserSignOutComponent } from './user-sign-out/user-sign-out.component';

@NgModule({
  declarations: [
    UserSignInComponent,
    CreateAccountDialogComponent,
    UserSignOutComponent,
  ],
  exports: [UserSignInComponent, UserSignOutComponent],
  imports: [MaterialModule, CommonModule],
})
export class UserModule {}
