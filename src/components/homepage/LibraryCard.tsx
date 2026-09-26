import { IWorkout } from "@/types/workout.type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: IWorkout;
}

const LibraryCard = ({ workout }: WorkoutCardProps) => {
  return (
    <div className="group w-full max-w-[470px] overflow-hidden rounded-2xl border border-[#292D35] bg-[#15171C] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40">
      {/* Image */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={500}
          height={400}
          className=" transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>
      <Link href={`/workouts/${workout.id}`}>
        {/* Content */}
        <div className="p-7">
          {/* Muscle Group */}
          <div className="mb-5">
            <span className="rounded-full bg-[#C2F800] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black">
              {workout.muscleGroups[0]}
            </span>
          </div>

          {/* Workout Name */}
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <div className="pb-4">
            <p className="mt-2 text-sm text-[#9CA3AF] ">{workout.equipment}</p>
          </div>

          <div className="">
            <hr className="text-[#9CA3AF] " />
          </div>

          {/* Stats */}
          <div className="mt-4 flex items-center gap-6 text-sm text-[#9CA3AF] ">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock3 size={18} strokeWidth={1.8} />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame size={18} strokeWidth={1.8} />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star size={18} strokeWidth={1.8} className="fill-transparent" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LibraryCard;
