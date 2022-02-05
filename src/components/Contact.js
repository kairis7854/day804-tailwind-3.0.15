import React from 'react';

function Contact() {

    return (
        <div id='contact' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black flex justify-center items-center flex-col lg:px-[20px] lg:pt-[80px] lg:mb-[100px] dark:bg-black dark:text-white'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center '>
                    <p style={{ borderBottom: '2px solid #777', width: 'max-content' }}>Let's Say Hi</p>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam.</p>
            </div>
            <div className="relative w-full max-w-[700px] mt-[20px]">
                <div className="row">
                    <input className='contactInput' type="text" placeholder='First Name' />
                    <input className='contactInput' type="text" placeholder='Last Name' />
                </div>
                <div className="row">
                    <input className='contactInput' type="text" placeholder='Email Address' />
                    <input className='contactInput' type="text" placeholder='Mobile No.' />
                </div>
                <div className="row2 resize-none h-[200px]">
                    <textarea className='contactInput h-full resize-none' type="text" placeholder='Message' />
                </div>
                <div className="row2">
                    <input className='bg-black text-white py-[10px] px-[30px] font-[500] tracking-[2px] cursor-pointer text-[16px] uppercase max-w-[150px] border-none dark:bg-[#2196f3]' type="submit" value='Send' />
                </div>
            </div>
        </div>
    )
}

export default Contact;
