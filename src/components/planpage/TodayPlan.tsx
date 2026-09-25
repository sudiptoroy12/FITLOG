"use client";

import TodayPlanCard from "@/components/workouts/TodayPlanCard";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
import EmptyPlan from "./EmptyPlan";
import { IWorkout } from "@/types/workout.type";


interface TodayPlanProps {
  sortWorkouts: (workouts: IWorkout[]) => IWorkout[];
}

const TodayPlan = ({ sortWorkouts }: TodayPlanProps) => {
  const { todayPlan } = useContext(WorkoutContext);



  const sortedTodayPlan = sortWorkouts(todayPlan);

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6  my-6  max-w-7xl mx-auto">
        {sortedTodayPlan.length === 0 ? (
          <EmptyPlan />
        ) : (
          sortedTodayPlan.map((workout) => {
            return <TodayPlanCard key={workout.id} workout={workout} />;
          })
        )}
      </div>
    </div>
  );
};

export default TodayPlan;
