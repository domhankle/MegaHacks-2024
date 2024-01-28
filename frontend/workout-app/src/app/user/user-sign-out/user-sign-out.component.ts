import { Component, OnInit } from '@angular/core';
import { User } from '../types';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-out',
  templateUrl: './user-sign-out.component.html',
  styleUrl: './user-sign-out.component.scss',
})
export class UserSignOutComponent implements OnInit {
  constructor(private _userService: UserService, private _router: Router) {}

  public ngOnInit(): void {
    if (this._router.url === '/home' && !this._userService.id) {
      this._router.navigate(['sign-in']);
    }
  }

  public onSignOutButtonClick(): void {
    this._router.navigate(['/sign-in']);
    this._userService.id = undefined;
  }
}
