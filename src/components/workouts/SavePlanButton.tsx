"use client";
import { WorkoutContext } from "@/context/WorkoutProvider";

import { IWorkout } from "@/types/workout.type";
import { Bookmark } from "lucide-react";

import { useContext } from "react";
import { toast } from "react-toastify";

const SavePlanButton = ({ workout }: { workout: IWorkout }) => {
  const { savePlan, setSavePlan } = useContext(WorkoutContext);

  const isSelected = savePlan.some((item) => item.id === workout.id);

  const handleSavePlan = () => {
    if (isSelected) {
      toast.warn(`${workout.name} is already Selected`);
    return
    }
    setSavePlan([...savePlan, workout]);
    toast.success(`${workout.name} added in Savelist`);
  };

  return (
    <button
      className="flex items-center justify-center gap-2 rounded-lg border border-[#353A44] bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1A1D23] cursor-pointer "
      onClick={() => handleSavePlan()}
    >
        {isSelected ? ("✓ Saved") : (
            <>
            <Bookmark size={17} />
      Save for later
            </>
        )}
      
    </button>
  );
};

export default SavePlanButton;
