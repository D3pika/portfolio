"use client";
import React from 'react';
import Image from "next/image";
import aboutImg from "../assets/profilepic1.png"
import book from "../assets/book.png"
import pc from "../assets/pc.png"
import card from "../assets/card.png"
import finance from "../assets/finance.png"

const about = () => {
    return (
      <div
        className="max-w-[1200px] mx-auto" id="about">

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>About <span className='text-[#D2B5A4]'>Me</span></h1>

        <div className="grid grid-cols-8 gap-6 place-items-center max-md:flex max-md:flex-col max-md:p-6">

            <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-gradient-xy'></div>
            <div className='flex flex-row p-6'>
                <Image 
                    src={book}
                    alt='book'
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>EDUCATION</h2>
                    <p className='text-lg text-white/70 mt-2'>I hold a degree in Computer Science from <strong>Lovely Professional University</strong> and I am focused on technologies like <strong>React, Next.js, Tailwind CSS and Express Js along with Mongo DB</strong> for backend development.</p>
                </div>
            </div>
            </div>

            <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-gradient-xy'></div>
            <div className='flex flex-row p-6'>
                <Image 
                    src={pc}
                    alt='book'
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>PROBLEM-SOLVING</h2>
                    <p className='text-lg text-white/70 mt-2'>I approach challenges with a logical and systematic mindset. My comfort Language : <strong>C++ and Java</strong></p>
                </div>
            </div>
            </div>

            <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-gradient-xy'></div>
            <div className='flex flex-row p-6'>
                <Image 
                    src={card}
                    alt='book'
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>EXPERIENCE</h2>
                    <p className='text-lg text-white/70 mt-2'>I have a diverse portfolio of projects, from making projects that solve real world problems to designing stunning designs.</p>
                </div>
            </div>
            </div>

            <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden">
            <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-20 animate-gradient-xy'></div>
            <div className='flex flex-row p-6'>
                <Image 
                    src={finance}
                    alt='book'
                    className='w-auto h-[130px]'
                />
                <div className='flex flex-col mt-4'>
                    <h2 className='text-2xl font-bold text-white/80'>TECHNICAL SKILLS</h2>
                    <p className='text-lg text-white/70 mt-2'>As a full stack Web Developer, I specialize in <strong>React JS, Next JS, Express JS, Mongo DB, My SQL, and Tailwind CSS</strong>. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions. Looking forward to put my skills at work.  </p>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  };

export default about
