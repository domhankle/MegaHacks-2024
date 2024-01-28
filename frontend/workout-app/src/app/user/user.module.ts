import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { CreateAccountDialogComponent } from './user-sign-in/create-account-dialog/create-account-dialog.component';

@NgModule({
  declarations: [UserSignInComponent, CreateAccountDialogComponent],
  exports: [UserSignInComponent],
  imports: [MaterialModule, CommonModule],
})
export class UserModule {}
