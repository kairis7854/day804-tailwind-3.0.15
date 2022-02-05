import React from 'react';
import user from '../assets/image/user.jpg'


function Banner() {
    return (
        <div id='home' className='relative min-h-screen flex justify-center items-center px-[20px] ' >
            <div className='flex flex-col justify-center items-center '>
                <div className='relative w-[300px] h-[300px] overflow-hidden rounded-[50%] mb-[20px] lg:w-[250px] lg:h-[250px]'>
                    <img src={user} alt="user" className='absolute top-0 left-0 w-full h-full object-cover' />
                </div>
                <h3 className='my-[.67em] relative text-[1.4em] text-black tracking-[2px] uppercase lg:text-center dark:text-white'>Muhammad Irshad</h3>
                <p className='text-[#777] lg:text-center dark:text-white'>I'm a Creative Front End Web Developer.</p>
                <ul className='absolute bottom-[20px] flex'>
                    <li className='bannerLi'><svg className="h-6 w-6 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></li>
                    <li className='bannerLi'><svg className="h-6 w-6 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></li>
                </ul>
            </div>
        </div>
    )
}

export default Banner
