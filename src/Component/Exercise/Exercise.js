import React from 'react';

const Exercise = ({exercise}) => {
    const {name, time, information, image} = exercise;
    return (
        <div className='pl-12 pt-10 grid grid-cols-3'>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
                <a href="#">
                <img class="rounded-t-lg" src={image} alt="..." />
                </a>
                <div class="p-5">
                    <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h1>
                    <p>Time: {time}s</p>
                    <p class="mb-3 font-normal text-gray-700 ">{information}</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Exercise;