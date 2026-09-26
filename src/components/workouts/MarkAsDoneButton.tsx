'use client'
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkout } from "@/types/workout.type";
import { Check, X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface MarkAsDoneButtonProps {
  workout: IWorkout;
}

const MarkAsDoneButton = ({
  workout,
}: MarkAsDoneButtonProps) => {
  const { todayPlan, setTodayPlan } = useContext(WorkoutContext);



  const handleMarkAsDone= () => {
    const remainTodayPlan = todayPlan.filter((item) => item.id !== workout.id);
    setTodayPlan(remainTodayPlan);
    toast.success(`${workout.name} Done successfully`)
  };

  return (
     <button
     onClick={()=> handleMarkAsDone()}
         
          className="flex items-center gap-2 rounded-full bg-[#C2F800] px-1 py-0.5 sm:px-5 sm:py-2.5 text-xs font-bold text-black transition hover:bg-[#D2FF2B] "
        >
          <Check size={14} strokeWidth={3} className="" />
          <span className="hidden sm:inline ">
            Mark as Done
          </span>
        </button>
  );
};

export default MarkAsDoneButton;