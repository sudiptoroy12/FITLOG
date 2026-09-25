import Image from "next/image";
import { CalendarPlus, Bookmark, Star } from "lucide-react";
import {  getSingleData } from "@/lib/Datafetch";
import { IWorkout } from "@/types/workout.type";
import TodayPlanButton from "@/components/workouts/TodayPlanButton";
import SavePlanButton from "@/components/workouts/SavePlanButton";

interface IWorkoutsDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetails = async ({ params }: IWorkoutsDetailsPageProps) => {
  const { id } = await params;

  const detailsData = await getSingleData();

  const workout = detailsData.find(
    (workout: IWorkout) => workout.id === Number(id),
  ) as IWorkout;



  return (
    <main className="min-h-screen   py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Main Details Container */}
        <div className="grid overflow-hidden lg:grid-cols-2 mx-6 ">
          {/* ================= IMAGE ================= */}
          <div className="relative min-h-[400px] lg:min-h-[600px]  items-center flex">
            <Image
              src={workout.image}
              alt={workout.name}
              width={1000}
              height={500}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-4 sm:p-6 ">
            {/* Workout Name */}
            <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9CA3AF]">
              {workout.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-4 overflow-hidden rounded-xl border border-[#292D35] bg-[#16191F]">
              <DetailRow label="Equipment" value={workout.equipment} />

              <DetailRow label="Difficulty" value={workout.difficulty} />

              <DetailRow label="Sets" value={workout.sets.toString()} />

              <DetailRow label="Reps" value={workout.reps} />

              <DetailRow label="Duration" value={`${workout.duration} min`} />

              <DetailRow
                label="Calories"
                value={`${workout.caloriesBurned} kcal`}
              />

              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B919D]">
                  Rating
                </span>

                <div className="flex items-center gap-2 text-sm text-white">
                  <Star size={16} className="fill-[#C2F800] text-[#C2F800]" />
                  {workout.rating}
                </div>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-3">
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-1">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-[#A1A6B0]"
                  >
                    <span className="min-w-[18px] font-medium text-[#8B919D]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <TodayPlanButton workout={workout}/>

              <SavePlanButton workout={workout}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;

/* ================= DETAIL ROW ================= */

interface DetailRowProps {
  label: string;
  value: string;
}

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className="flex items-center justify-between border-b border-[#292D35] px-4 py-3 last:border-b-0">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8B919D]">
        {label}
      </span>

      <span className="text-sm text-[#E5E7EB]">{value}</span>
    </div>
  );
};
