'use client'

import SavePlanCard from '@/components/workouts/SavePlanCard';
import { WorkoutContext } from '@/context/WorkoutProvider';
import { useContext } from 'react';
import EmptyPlan from './EmptyPlan';

const SavePlan = () => {

    const {savePlan} = useContext(WorkoutContext)

    console.log(savePlan);
    
    return (
        <div className="">
      <div className="grid grid-cols-1 gap-6  my-6  max-w-7xl mx-auto">
        {savePlan.length === 0 ? <EmptyPlan/> : savePlan.map((workout) => {
          return <SavePlanCard key={workout.id} workout={workout} />;
         
          
        
        })}
      </div>
    </div>
    );
};

export default SavePlan;