"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import message from "../assets/icon2.png";
import { motion } from 'framer-motion';
import profilepic from "../assets/profilepic.png"

const hero = () => {
  return (
    <div className="py-15 relative overflow-clip bg-gradient-to-b from-black via-[#2B1942] to-[#DBAF6E]">

    <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
    bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-black-600 via-[#2B1942] to-[#DBAF6E]"></div>

        <div className="relative">
            <br />
            <div className="text-8xl font-bold text-center">
                <h1 className="text-[#98B4CE]">Hi, I am </h1>
                <h1 className="text-[#d2b5a4]">Deepika Negi</h1>
            </div>

            <motion.div 
                className="hidden md:block absolute left-[280px] top-[200px]"
                drag>
                    <Image
                    src={cursor}
                    alt="profile"
                    width="150"
                    height="150"
                    className=""
                    draggable="false"
                    />
            </motion.div>
            <motion.div 
                className="hidden md:block absolute right-[220px] top-[10px]"
                drag>
                    <Image
                    src={message}
                    alt="profile"
                    width="150"
                    height="150"
                    className=""
                    draggable="false"
                    />
            </motion.div>
        
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
            I am a full-stack developer focused on creating website that provide meaningful solutions.
        </p>
            <br />
        <Image 
            src={profilepic}
            alt="profile"
            className="max-md:h-full max-md:w-full mx-auto h-[40%] w-auto"
        />
        <br />
    </div>

    </div>
  )
}

export default hero