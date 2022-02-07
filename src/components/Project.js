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

    const imgArr = [img1,img2,img3,img4,img5,img6,img7,img8,img9]
    const projectArr = imgArr.map((item, index) => {
        return (
            <div className="workBox group" key={index}>
                <div className="imgBx">
                    <img className='projectImg' src={item} alt="" />
                </div>
                <div className="textBx">
                    <h3 className='projectH3'>Project 0{index+1}</h3>
                </div>
            </div>
        )
    })

    return (
        <div id='project' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black lg:px-[20px] lg:pt-[80px] dark:bg-black dark:text-grayLight'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center dark:text-white'>
                    <p style={{ borderBottom: '2px solid #777', width: 'max-content' }}>Recent Work</p>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam.</p>
            </div>
            <div className='gridContent'>
                {projectArr}
            </div>
        </div>
    )
}

export default Project
