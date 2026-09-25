"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import { X } from "lucide-react";
import { useContext } from "react";

interface DeleteTodayPlanButtonProps {
  workout: IWorkout;
}

const DeleteTodayPlanButton = ({
  workout,
}: DeleteTodayPlanButtonProps) => {
  const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

  console.log(todayPlan);

  const handleTodayPlanDelete = () => {
    const remainTodayPlan = todayPlan.filter((item) => item.id !== workout.id);
    setTodayPlan(remainTodayPlan);
  };

  return (
    <button
      onClick={() => handleTodayPlanDelete()}
      aria-label="Remove workout"
      className="rounded-full p-2 text-[#737A85] transition hover:bg-[#1D2128] hover:text-white"
    >
      <X size={17} />
    </button>
  );
};

export default DeleteTodayPlanButton;
