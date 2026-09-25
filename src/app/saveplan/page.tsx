'use client'

import { WorkoutContext } from '@/context/WorkoutProvider';
import { useContext } from 'react';

const Saveplan = () => {

    const {savePlan} = useContext(WorkoutContext)

    console.log(savePlan);
    
    return (
        <div>{savePlan.length}</div>
    );
};

export default Saveplan;