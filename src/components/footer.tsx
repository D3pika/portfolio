import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-600 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Deepika Negi</h1>
        <div className='flex space-x-5 mt-4'>
            <a className="hover:text-gray-300" href='https://www.linkedin.com/in/deepikanegi123/' target="_blank">
                <FaLinkedinIn size={24}/>
            </a>
        </div>

    </div>
  )
}

export default footer
