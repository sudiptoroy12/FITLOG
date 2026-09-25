
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star, X } from "lucide-react";

import { IWorkout } from "@/types/workout.type";
import DeleteSavePlanButton from "./DelteSavePlanButton";

interface SavePlanCardProps {
  workout: IWorkout;
}

const SavePlanCard = ({ workout }: SavePlanCardProps) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border border-[#292D35] bg-[#15181E] p-3 transition hover:border-[#C2F800]/30">
      {/* ================= IMAGE ================= */}

      <div className="relative h-[72px] w-[125px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src={workout.image}
          alt={workout.name}
          width={140}
          height={100}
          className="object-cover"
        />
      </div>

      {/* ================= WORKOUT INFO ================= */}

      <div className="min-w-0 flex-1">
        {/* Name */}
        <h3 className="truncate text-sm font-extrabold uppercase tracking-wide text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-0.5 truncate text-xs text-[#858B96]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex items-center gap-4 text-xs text-[#A1A6B0]">
          {/* Duration */}
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} className="text-[#C2F800]" />
            {workout.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1.5">
            <Flame size={14} className="text-[#C2F800]" />
            {workout.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1.5">
            <Star size={14} className="fill-[#C2F800] text-[#C2F800]" />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}

      <div className="flex shrink-0 items-center gap-2">
        {/* View Details */}
        <Link
          href={`/workouts/${workout.id}`}
          className="hidden rounded-full border border-[#353A44] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#1D2128] sm:block"
        >
          View Details
        </Link>

        {/* Remove */}
       <DeleteSavePlanButton workout={workout}/>
      </div>
    </div>
  );
};

export default SavePlanCard;
