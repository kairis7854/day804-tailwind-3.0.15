import React from 'react';
import img1 from '../assets/image/img1.jpg'
import img2 from '../assets/image/img2.jpg'
import img3 from '../assets/image/img3.jpg'
import img4 from '../assets/image/img4.jpg'
import img5 from '../assets/image/img5.jpg'
import img6 from '../assets/image/img6.jpg'
import img7 from '../assets/image/img7.jpg'
import img8 from '../assets/image/img8.jpg'
import img9 from '../assets/image/img9.jpg'

function Project() {
    return (
        <div id='project' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black lg:px-[20px] lg:pt-[80px] dark:bg-black dark:text-grayLight'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center dark:text-white'>
                    <p style={{ borderBottom: '2px solid #777', width: 'max-content' }}>Recent Work</p>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam.</p>
            </div>
            <div className='gridContent'>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img1} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 01</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img2} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 02</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img3} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 03</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img4} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 04</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img5} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 05</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img6} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 06</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img7} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 07</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img8} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 08</h3>
                    </div>
                </div>
                <div className="workBox group">
                    <div className="imgBx">
                        <img className='projectImg' src={img9} alt="" />
                    </div>
                    <div className="textBx">
                        <h3 className='projectH3'>Project 09</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
