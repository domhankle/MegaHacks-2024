export interface WorkoutPlan {
  name: string;
  id: number;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
}
