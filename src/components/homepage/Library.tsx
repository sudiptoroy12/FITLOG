import { getAllData } from "@/lib/Datafetch";
import LibraryCard from "./LibraryCard";
import { IWorkout } from "@/types/workout.type";


const Library = async() => {
  const libraryData = await getAllData()
  
  
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-bold  pb-3 text-center sm:text-left text-white">
        THE LIBRARY
      </h1>
      <h3 className="text-lg text-gray-600 text-center sm:text-left text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.
      </h3>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6 ">
       {libraryData.map((workout:IWorkout)=>{
        return(<LibraryCard key={workout.id} workout={workout}
          />
        )

       })}

      </div>
    </div>
  );
};

export default Library;
