'use client'
import { WorkoutContext } from '@/context/WorkoutProvider';

import { IWorkout } from '@/types/workout.type';
import { CalendarPlus } from 'lucide-react';
import  { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayPlanButton = ({workout}: {workout: IWorkout}) => {
    const {todayPlan, setTodayPlan} = useContext(WorkoutContext)


    


    const handleTodayPlan = () =>{
        

        setTodayPlan([...todayPlan, workout])
        toast.success(`${workout.name} added in Planlist`)
        
    }

    return (
       <button className="flex items-center justify-center gap-2 rounded-lg bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#d0ff33]" onClick={()=> handleTodayPlan()}>
                <CalendarPlus size={17} />
                Add to today&apos;s plan
              </button>
    );
};

export default TodayPlanButton;