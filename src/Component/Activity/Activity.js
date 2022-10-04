import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import './Activity.css'

const Activity = () => {
    const [exercises, setExercise] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data));
    }, []);
    return (
        <div className='grid lg:grid-cols-layout grid-cols-mobile_layout'>
            <div className=''>
                <h1 className='lg:pt-20 text-center lg:text-left lg:pl-12 text-2xl font-semibold'>Select Today's Exercise</h1>
                <div className='grid lg:grid-cols-3 lg:gap-2 grid-cols-1'>
                    {
                        exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='bg-pink-300 mt-20 rounded-lg shadow-lg'>
               <Detail></Detail>
            </div>
        </div>
    );
};

export default Activity;