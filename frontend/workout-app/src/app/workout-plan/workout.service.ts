import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutPlan } from './types';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  url: string = 'http://localhost:8000/workout/plan';
  constructor(private _http: HttpClient) {}

  public getWorkoutPlan(id: number): Observable<WorkoutPlan> {
    return this._http.get<WorkoutPlan>(`${this.url}`);
  }
}
