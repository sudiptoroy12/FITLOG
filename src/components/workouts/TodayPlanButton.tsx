'use client'
import { WorkoutContext } from '@/context/WorkoutProvider';

import { IWorkout } from '@/types/workout.type';
import { CalendarPlus } from 'lucide-react';
import  { useContext } from 'react';

const TodayPlanButton = ({workout}: {workout: IWorkout}) => {
    const {todayPlan, setTodayPlan} = useContext(WorkoutContext)

    console.log(todayPlan);
    


    const handleTodayPlan = () =>{
        console.log("today button triggered" , workout);

        setTodayPlan([...todayPlan, workout])
        
    }

    return (
       <button className="flex items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d0ff33]" onClick={()=> handleTodayPlan()}>
                <CalendarPlus size={17} />
                Add to today&apos;s plan
              </button>
    );
};

export default TodayPlanButton;