import React from 'react';
import img from '../../Images/profile.jpg';

const Detail = ({exerciseDetail}) => {
    let totalTime = 0;
    for (const exercise of exerciseDetail){
        totalTime = totalTime + exercise.time;
    }
    return (
        <div>
            <div className='flex justify-center lg:justify-start lg:pl-5 py-7'>
                <div className=''>
                    <img className='h-[85px] w-[85px] rounded-full' src={img} alt="" />
                </div>
                <div className='pl-4 pt-3'>
                    <h1 className='text-2xl font-semibold'>Salsabeel Noor</h1>
                    <p className='text-gray-700'>Sydney, Australia</p>
                </div>
            </div>
            <div className='flex bg-pink-200 drop-shadow-md rounded-lg mx-4 justify-around py-2'>
                <div>
                    <h1 className='text-2xl font-bold'>57<sub className='text-base font-medium text-gray-800'>KG</sub></h1>
                    <p className='text-xl text-gray-800'>Weight</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>6.5</h1>
                    <p className='text-xl text-gray-800'>Height</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>25<sub className='text-base font-medium text-gray-800'>YRS</sub></h1>
                    <p className='text-xl text-gray-800'>Age</p>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-medium text-left pl-4 pt-7 pb-5'>Add A Break</h1>
                <div className='flex bg-pink-200 drop-shadow-md rounded-lg mx-4 justify-around py-3'>
                    <div className='bg-gray-300 rounded-full p-2 hover:bg-[#e864b8]'>
                        <button>
                        <p className='font-semibold'>10s</p>
                        </button>
                    </div>
                    <div className='bg-gray-300 rounded-full p-2 hover:bg-[#e864b8]'>
                        <button>
                            <p className='font-semibold'>20s</p>
                        </button>
                    </div>
                    <div className='bg-gray-300 rounded-full p-2 hover:bg-[#e864b8]'>
                        <button>
                            <p className='font-semibold'>30s</p>
                        </button>
                    </div>
                    <div className='bg-gray-300 rounded-full p-2 hover:bg-[#e864b8]'>
                        <button>
                            <p className='font-semibold'>40s</p>
                        </button>
                    </div>
                    <div className='bg-gray-300 rounded-full p-2 hover:bg-[#e864b8]'>
                        <button>
                            <p className='font-semibold'>50s</p>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-medium text-left pl-4 pt-7 pb-5'>Exercise Details</h1>
                <div className='flex bg-pink-200 drop-shadow-md rounded-lg mx-4 py-3 justify-between px-4'>
                    <h1 className='text-xl font-semibold'>Exercise Time</h1>
                    <p>{totalTime}<span className='text-gray-500'>seconds</span></p>
                </div>
                <div className='flex bg-pink-200 drop-shadow-md rounded-lg mx-4 mt-5 py-3 justify-between px-4'>
                    <h1 className='text-xl font-semibold'>Break Time</h1>
                    <p></p>
                </div>
            </div>

            <button className='items-center w-4/5 mt-7 mx-3 py-3 text-sm font-medium text-center text-white bg-[#C71585] rounded-lg hover:bg-[#700764]'>Acitivity Completed</button>

        </div>
    );
};

export default Detail;