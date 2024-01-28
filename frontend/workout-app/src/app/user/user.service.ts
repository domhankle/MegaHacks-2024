import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginStatus, User } from './types';
import { HTTP_HEADERS } from '../types';
import { Observable, Subject } from 'rxjs';
import { WorkoutPlan } from '../workout/types';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUserId: Subject<number>;
  public id?: number;

  url: string = 'http://localhost:8000/workout/user';
  constructor(private _http: HttpClient) {
    this.currentUserId = new Subject<number>();
  }

  public setCurrentUserId(id: number): void {
    this.currentUserId.next(id);
    this.id = id;
  }

  public signIn(username: string, password: string): Observable<LoginStatus> {
    return this._http.get<LoginStatus>(
      `${this.url}/login?username=${username}&password=${password}`,
      { headers: HTTP_HEADERS }
    );
  }

  public createUser(user: User): Observable<User> {
    return this._http.post<User>(`${this.url}/create`, user, {
      headers: HTTP_HEADERS,
    });
  }
}
