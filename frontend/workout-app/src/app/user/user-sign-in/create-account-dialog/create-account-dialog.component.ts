import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../types';

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrl: './create-account-dialog.component.scss',
})
export class CreateAccountDialogComponent {
  public password?: string;
  public confirmPassword?: string;
  public username?: string;

  constructor(private _dialog: MatDialogRef<CreateAccountDialogComponent>) {}

  public onCancelClick(): void {
    this._dialog.close(undefined);
  }

  public onCreateClick(): void {
    if (this.username && this.password) {
      const user: User = {
        username: this.username,
        password: this.password,
        plans: [],
      };

      this._dialog.close(user);
    }
  }
}
