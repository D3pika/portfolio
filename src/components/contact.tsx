import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"

const contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
            <li className='flex items-center'>
                <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6'/>
                <p className='text-xl'>123-456-7890</p>
            </li>
            <li className='flex items-center'>
                <Image src={mail} alt='mail' className='h-[110px] w-auto mr-6'/>
                <p className='text-xl'>dipikavevo@gmail.com</p>
            </li>
        </ul>
      </div>

    <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400'>Let's Connect</h2>
        <p className='text-white/70 mb-6'>Send me a message and Let's schedule a call.</p>

        <form method='POST' action="https://getform.io/f/bmdpwmda" className='space-y-4'>
            <div className='grid md:grid-cols-2 gap-4'>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="First Name"/>
                <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Last Name"/>
                <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Email"/>
                <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="Phone Number"/>
            </div>
            <textarea className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder="your Message"/>
            <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
            <input type="hidden" name="_gotcha" className="display-none"></input>
        </form>

    </div>

    </div>
  )
}

export default contact
