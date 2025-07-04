import React from 'react';
import { Link } from 'react-router-dom';
import { LuTicketPercent } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';

const Topbar = () => {
  return (
    <div className="bg-primary text-gray-700 font-medium">
      <div className='container mx-auto px-2 py-4 flex justify-center items-center gap-2 md:gap-4'>
        <LuTicketPercent className='h-4 w-4 md:h-6 md:w-6'  />
        <p className='text-sm md:text-lg tracking-tight md:tracking-normal'>30% off storewide — Limited time!</p>
        <div className='border-b border-blue-500 hover:border-blue-700'>
          <a href="#" className='flex items-center gap-2 text-blue-500 hover:text-blue-700 text-sm md:text-lg '>
            Shop Now
            <BsArrowRight className='h-4 w-4 md:h-6 md:w-6 ' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
