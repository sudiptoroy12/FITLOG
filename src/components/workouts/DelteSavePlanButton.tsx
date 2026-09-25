"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import { X } from "lucide-react";
import { useContext } from "react";

interface DeletesavePlanButtonProps {
  workout: IWorkout;
}

const DeleteSavePlanButton = ({
  workout,
}: DeletesavePlanButtonProps) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  console.log(savePlan);

  const handlesavePlanDelete = () => {
    const remainsavePlan = savePlan.filter((item) => item.id !== workout.id);
    setSavePlan(remainsavePlan);
  };

  return (
    <button
      onClick={() => handlesavePlanDelete()}
      aria-label="Remove workout"
      className="rounded-full p-2 text-[#737A85] transition hover:bg-[#1D2128] hover:text-white"
    >
      <X size={17} />
    </button>
  );
};

export default DeleteSavePlanButton;