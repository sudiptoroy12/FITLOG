"use client";

import TodayPlanCard from "@/components/workouts/TodayPlanCard";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
import EmptyPlan from "./EmptyPlan";

const TodayPlan = () => {
  const { todayPlan } = useContext(WorkoutContext);



  return (
    <div className="">
      <div className="grid grid-cols-1 gap-6  my-6  max-w-7xl mx-auto">
        {todayPlan.length === 0 ? <EmptyPlan/> : todayPlan.map((workout) => {
          return <TodayPlanCard key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
};

export default TodayPlan;
