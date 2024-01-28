import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { WorkoutPlan } from './types';
import { HTTP_HEADERS } from '../types';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  public plans: Subject<WorkoutPlan[]>;

  public readonly url: string = 'http://localhost:8000/workout/plan';
  constructor(private _http: HttpClient) {
    this.plans = new Subject<WorkoutPlan[]>();
  }

  public setPlans(planArray: WorkoutPlan[]): void {
    console.log('Setting the plans to this: ', planArray);
    this.plans.next(planArray);
  }

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

  public deleteWorkoutPlan(id: number): Observable<WorkoutPlan> {
    console.log('ID I AM SENDING: ', id);
    return this._http.delete<WorkoutPlan>(`${this.url}/delete`, {
      headers: HTTP_HEADERS,
      body: { id: id } as any,
    });
  }
}
