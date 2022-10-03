import React from 'react';
import logo from '../../Images/Dumbel_pic.png';

const Header = () => {
    return (
        <div className=' bg-rose-300 border-b-4 border-pink-400'>
            <nav className='container mx-auto pt-4 pb-4 flex justify-center lg:justify-start'>
                <img className='w-[42px] h-[42px] border-black' src={logo} alt=".."/>
                <div>
                    <h1 className='text-2xl font-bold text-pink-900'>Activity Booster Club</h1>
                </div>
                
            </nav>
        </div>
    );
};

export default Header;