import Link from "next/link";


const EmptyPlan = () => {
  return (
    <div>
      <div className="flex flex-col w-full items-center  rounded-2xl border border-[#292D35] bg-[#15181E] py-20 transition hover:border-[#C2F800]/30">
      <h2 className="text-white font-bold text-2xl">NOTHING HERE YET</h2>
      <p className="text-[#9CA3AF]">Browse the library and add a lift to get today moving.</p>

      <Link href='/' className=" mt-6 rounded-full text-black bg-[#C2F800] px-4 py-3">Go to workouts</Link>
      </div>
    </div>
  );
};

export default EmptyPlan;
