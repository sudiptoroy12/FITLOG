'use client'

import { WorkoutContext } from '@/context/WorkoutProvider';
import { useContext } from 'react';

const Todayplan = () => {

    const {todayPlan} = useContext(WorkoutContext)

    console.log(todayPlan);
    
    return (
        <div>{todayPlan.length}</div>
    );
};

export default Todayplan;