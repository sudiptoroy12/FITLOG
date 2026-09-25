'use client'
import { WorkoutContext } from '@/context/WorkoutProvider';

import { IWorkout } from '@/types/workout.type';
import { Bookmark } from 'lucide-react';

import  { useContext } from 'react';

const SavePlanButton = ({workout}: {workout: IWorkout}) => {
    const {savePlan, setSavePlan} = useContext(WorkoutContext)

    console.log(savePlan);
    


    const handleSavePlan = () =>{
        console.log("today button triggered" , workout);

        setSavePlan([...savePlan, workout])
        
    }

    return (
      <button className="flex items-center justify-center gap-2 rounded-lg border border-[#353A44] bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1A1D23] " onClick={()=>handleSavePlan()}>
                <Bookmark size={17} />
                Save for later
              </button>
    );
};

export default SavePlanButton;