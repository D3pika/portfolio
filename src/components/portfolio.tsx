"use client";
import React from 'react';
import {motion} from 'framer-motion';
import Project from "../assets/project.png"
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Image from 'next/image';

const projects = [
    {
        title: "Ecommerce Website for NFT selling or buying.",
        desc: "The “NFTS World” project aims to change the way digital assets are discovered, collected, and traded through the new NFT platform. The platform offers users a hands-on experience, allowing them to explore a wide range of unique NFTs, from digital images to virtual worlds and business cards.",
        devstack: "MongoDB, Express JS, React, Node JS",
        link: "https://github.com/Negi-Deepika/Nft_master",
        git: "https://github.com/Negi-Deepika/Nft_master",
        src: Project
    },
    {
        title: "Live Document Editor",
        desc: "The Real-Time Document Editor is a web-based application that enables seamless collaboration on document editing in real-time. Built with Node.js, Express.js, React, Socket.io, and Codemirror, this project provides users with a platform to create, share, and edit documents together, fostering efficient teamwork and productivity.",
        devstack: "Node JS, Express JS, React, Socket.io",
        link: "#",
        git: "https://github.com/Negi-Deepika/live-document-editor",
        src: Project1
    },
    {
        title: "Portfolio Website",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptate delectus ducimus architecto adipisci distinctio ipsam accusantium temporibus nostrum alias!",
        devstack: "Next JS, React JS, Framer Motions Tailwind CSS",
        link: "#",
        git: "#",
        src: Project2
    },
];

const portfolio = () => {
    return (
      <div className="text-white bg-gradient-to-b from-black to-[#381A5F] py-18 mt-40" id='projects'>
          <div className="max-w-[1200px] mx-auto space-y-24 px-4 md:px-0"> {/* added padding for mobile devices */}
          <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 text-center md:text-left'> {/* added text-center for mobile devices */}
              Selected <span className='text-[#D2B5A4]'>Projects</span>
          </h1>
              {
                  projects.map((project, index) => (
                      <motion.div
                          key={index}
                          initial={{opacity: 0, y:75}}
                          whileInView={{opacity:1, y: 0}}
                          viewport={{once: true}}
                          transition={{duration: 0.5, delay: 0.25}}
                          className="flex flex-col-reverse md:flex-row-reverse gap-12"
                      >
                          <div className='space-y-2 max-w-[550px] md:w-1/2'> {/* added md:w-1/2 for desktop devices */}
                              <h2 className='text-7xl my-4 test-white/70'>{`0${index+1}`}</h2>
                              <h2 className='text-4xl'>{project.title}</h2>
                              <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                              <p className='text-xl text-orange-500 font-semibold'>{project.devstack}</p>
                              <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                  <a className='text-xl text-yellow-500 font-semibold mr-6' href={project.link}  target="_blank" >Link</a>
                                  <a className='text-xl text-yellow-500 font-semibold' href={project.git} target="_blank" >Git</a>
                              </div>
                          </div>
  
                          <div className='flex justify-center items-center md:w-1/2'> {/* added md:w-1/2 for desktop devices */}
                                  <Image src={project.src} alt={project.title} className = "h-[350px] w-full object-cover border rounded border-gray-700"/> {/* changed w-[500px] to w-full */}
                          </div>
                      </motion.div>
                  ))
              }
          </div>
      </div>
    )
  }
  

export default portfolio
