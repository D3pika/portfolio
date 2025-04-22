import React from 'react';
import { FaLinkedinIn, FaGithub, FaMailBulk } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-600 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Deepika Negi</h1>
        <div className='flex space-x-5 mt-4'>
            <a className="hover:text-gray-300" href='https://www.linkedin.com/in/deepikanegi123/' target="_blank">
                <FaLinkedinIn size={24}/>
            </a>
            <a className="hover:text-gray-300" href='https://github.com/D3pika' target="_blank">
                <FaGithub size={24}/>
            </a>
            <a className="hover:text-gray-300" href='emailto:deepikanegi2309@gmail.com' target="_blank">
                <FaMailBulk size={24}/>
            </a>
        </div>

    </div>
  )
}

export default footer
