import React from 'react';

const Exercise = ({exercise, addExerciseTime}) => {
    const {name, time, information, image, age} = exercise;
    return (
        <div className='lg:pl-12 pt-10 w-auto'>
            <div className="max-w-sm rounded-lg border border-rose-200 shadow-md bg-[#ee93b3]">
                <a href="#">
                <img className="rounded-t-lg" src={image} alt="..." />
                </a>
                <div className="p-5">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h1>
                    <p>Time: {time}s</p>
                    <p>Minimum Age: {age}yrs</p>
                    <p className="mb-3 font-normal text-gray-700">{information}</p>
                    <button onClick={() => addExerciseTime(exercise)} className='items-center w-full py-3 px-3 text-sm font-medium text-center text-white bg-[#C71585] rounded-lg hover:bg-[#700764]'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;