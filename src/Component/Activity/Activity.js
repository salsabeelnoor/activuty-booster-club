import React from 'react';
import Detail from '../Detail/Detail';
import Exercise from '../Exercise/Exercise';
import './Activity.css'

const Activity = () => {
    return (
        <div className='grid lg:grid-cols-layout grid-cols-mobile_layout'>
            <div className=''>
                <h1 className='pt-20 text-center lg:text-left lg:pl-12 text-2xl font-semibold'>Select Today's Exercise</h1>
                <Exercise></Exercise>
            </div>
            <div className='bg-pink-300 min-h-screen'>
               <Detail></Detail>
            </div>
        </div>
    );
};

export default Activity;