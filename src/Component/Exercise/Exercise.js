import React from 'react';

const Exercise = ({exercise}) => {
    const {name, time, information, image} = exercise;
    return (
        <div className='lg:pl-12 pt-10 w-auto'>
            <div class="max-w-sm rounded-lg border border-rose-200 shadow-md bg-[#ee93b3]">
                <a href="#">
                <img class="rounded-t-lg" src={image} alt="..." />
                </a>
                <div class="p-5">
                    <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h1>
                    <p>Time: {time}s</p>
                    <p class="mb-3 font-normal text-gray-700">{information}</p>
                    <button className='items-center w-full py-3 px-3 text-sm font-medium text-center text-white bg-[#C71585] rounded-lg hover:bg-[#700764] focus:ring-4'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;