import { WorkoutPlan } from '../workout/types';

export interface User {
  username: string;
  password: string;
  id?: number;
  plans: WorkoutPlan[];
}

export interface LoginStatus {
  result: boolean;
  id?: number;
  error?: string;
}
