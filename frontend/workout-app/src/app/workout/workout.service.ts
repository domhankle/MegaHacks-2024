import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkoutPlan } from './types';
import { HTTP_HEADERS } from '../types';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  url: string = 'http://localhost:8000/workout/plan';
  constructor(private _http: HttpClient) {}

  public getWorkoutPlan(name: string): Observable<WorkoutPlan> {
    return this._http.get<WorkoutPlan>(`${this.url}/${name}`);
  }

  public getWorkoutPlans(): Observable<WorkoutPlan[]> {
    return this._http.get<WorkoutPlan[]>(`${this.url}/plans`);
  }

  public createWorkoutPlan(plan: WorkoutPlan): Observable<WorkoutPlan> {
    return this._http.post<WorkoutPlan>(`${this.url}/create`, plan, {
      headers: HTTP_HEADERS,
    });
  }
}
