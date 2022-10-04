import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import QuestionAnswer from '../Q&A/QuestionAnswer';
import './Activity.css'

const Activity = () => {
    const [exercises, setExercise] = useState([]);
    const [exerciseDetail, setExerciseDetail ] = useState([]);
    const [breakTime, setBreakTime] = useState([0]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercise(data));
    }, []);

    const addExerciseTime = (selectedExercise) => {
        let newExerciseDetail = [];
        newExerciseDetail = [...exerciseDetail, selectedExercise];
        setExerciseDetail(newExerciseDetail);
    }
    const addBreakTime = (value) => {
        localStorage.setItem('breakTime', value);
        setBreakTime(value);
    }
    return (
        <div className=''>
            <div className='grid lg:grid-cols-layout grid-cols-mobile_layout'>
                <div className='bg-pink-300 lg:mt-[150px] mt-20 rounded-lg shadow-lg lg:hidden block md:block'>
                    <Detail
                    exerciseDetail = {exerciseDetail}
                    breakTime={breakTime}
                    addBreakTime = {addBreakTime}
                    ></Detail>
                </div>

                <div>
                    <h1 className='lg:pt-20 text-center lg:text-left lg:pl-12 text-2xl pt-16 font-semibold'>Select Today's Exercise</h1>
                    <div className='grid lg:grid-cols-3 lg:gap-2 grid-cols-1 md:grid-cols-2  '>
                    {
                        exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        addExerciseTime = {addExerciseTime}
                        ></Exercise>)
                    }
                    </div>
                </div>

            <div className='bg-pink-300 lg:mt-[150px] mt-20 rounded-lg shadow-lg hidden lg:block'>
               <Detail
               exerciseDetail = {exerciseDetail}
               breakTime={breakTime}
               addBreakTime = {addBreakTime}
               ></Detail>
            </div>
            </div>
            
            <div className='bg-pink-300 rounded-lg shadow-lg mt-20 grid-cols-[1fr] container mx-auto'>
                <QuestionAnswer ></QuestionAnswer>
            </div>
        </div>
    );
};

export default Activity;