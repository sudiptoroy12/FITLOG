"use client";

import { IWorkout } from "@/types/workout.type";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface IWorkoutContext {
  todayPlan: IWorkout[];
  setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  savePlan: IWorkout[];
  setSavePlan: Dispatch<SetStateAction<IWorkout[]>>;
}

export const WorkoutContext = createContext<IWorkoutContext>({
  todayPlan: [],
  setTodayPlan: () => {},
  savePlan: [],
  setSavePlan: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [savePlan, setSavePlan] = useState<IWorkout[]>([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    savePlan,
    setSavePlan,
  };
  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
