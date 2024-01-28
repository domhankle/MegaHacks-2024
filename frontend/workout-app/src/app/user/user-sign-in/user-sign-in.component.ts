import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component';
import { User } from '../types';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrl: './user-sign-in.component.scss',
})
export class UserSignInComponent {
  public username?: string;
  public password?: string;

  constructor(
    private _userService: UserService,
    private _dialog: MatDialog,
    private _router: Router
  ) {}

  public onSignInClick(): void {
    if (this.username && this.password) {
      this._userService.signIn(this.username, this.password).subscribe(
        (data) => {
          if (data.id) {
            this._userService.setCurrentUserId(data.id);
            this._router.navigate(['/home']);
          }
        },
        (error) => {
          console.log('ERROR could not GET user');
        }
      );
    }
  }

  public onCreateAccountClick(): void {
    const dialogRef = this._dialog.open(CreateAccountDialogComponent, {
      width: '400px',
      height: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((data) => {
      if (data !== undefined) {
        this._userService.createUser(data).subscribe(
          (response) => {
            this.username = response.username;
            this.password = response.password;

            this.onSignInClick();
          },
          (error) => {
            console.log('Failed to POST a user!');
          }
        );
      } else {
        console.log('There was no request to create a User');
      }
    });
  }
}
