import React from 'react';
import icon1 from '../assets/image/icon1.png'
import icon2 from '../assets/image/icon2.png'
import icon3 from '../assets/image/icon3.png'
import icon4 from '../assets/image/icon4.png'
import icon5 from '../assets/image/icon5.png'
import icon6 from '../assets/image/icon6.png'

function Services() {
    return (
        <div id='services' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center'>
                    <p style={{ borderBottom: '2px solid #777', width: 'max-content' }}>Our Services</p>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam.</p>
            </div>
            <div className=' justify-center mt-[40px] grid grid-cols-3 gap-[20px] my-[40px]'>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon1} alt="icon1" />
                    <h2 className='serviceBoxH2'>Web Design</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon2} alt="icon2" />
                    <h2 className='serviceBoxH2'>Web Development</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon3} alt="icon3" />
                    <h2 className='serviceBoxH2'>Android Apps</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon4} alt="icon4" />
                    <h2 className='serviceBoxH2'>Photography</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon5} alt="icon5" />
                    <h2 className='serviceBoxH2'>Content Writing</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
                <div className='serviceBox'>
                    <img className='w-[50px]' src={icon6} alt="icon6" />
                    <h2 className='serviceBoxH2'>Video Editing</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus architecto.</p>
                </div>
            </div>

        </div>
    )
}

export default Services;
