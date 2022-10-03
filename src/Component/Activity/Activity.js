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
                <h1 className='pt-20 text-center lg:text-left lg:pl-12 text-2xl font-semibold'>Select Today's Exercise</h1>
                <div>
                    {
                        exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className='bg-pink-300 min-h-screen'>
               <Detail></Detail>
            </div>
        </div>
    );
};

export default Activity;