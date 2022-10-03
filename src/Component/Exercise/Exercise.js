import React from 'react';

const Exercise = () => {
    return (
        <div className='border-4'>
            <h1>This is exercise</h1>
            <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
                <a href="#">
                <img class="rounded-t-lg" src="" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Exercise;