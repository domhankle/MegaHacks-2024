export interface WorkoutPlan {
  name: string;
  id?: number;
  exercises: Exercise[];
  userid?: number;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
}
