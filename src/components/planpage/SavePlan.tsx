'use client'

import SavePlanCard from '@/components/workouts/SavePlanCard';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { useContext } from 'react';
import EmptyPlan from './EmptyPlan';
import { IWorkout } from '@/types/workout.type';


interface TodayPlanProps {
  sortWorkouts: (workouts: IWorkout[]) => IWorkout[];
}


const SavePlan = ({sortWorkouts}: TodayPlanProps) => {

  

    const {savePlan} = useContext(WorkoutContext)

    const sortedSavePlan = sortWorkouts(savePlan)

  
    
    return (
        <div className="">
      <div className="grid grid-cols-1 gap-6  my-6  max-w-7xl mx-auto">
        {sortedSavePlan.length === 0 ? <EmptyPlan/> : sortedSavePlan.map((workout) => {
          return <SavePlanCard key={workout.id} workout={workout} />;
         
          
        
        })}
      </div>
    </div>
    );
};

export default SavePlan;