import React from 'react';
import user1 from '../assets/image/user1.jpg'
import user2 from '../assets/image/user2.jpg'
import user3 from '../assets/image/user3.jpg'

function Testimonials() {

    return (
        <div id='testimonials' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black lg:px-[20px] lg:pt-[80px]'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center'>
                    <p style={{ borderBottom: '2px solid #777', width: 'max-content' }}>Testimonials</p>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam.</p>
            </div>
            <div className='grid grid-cols-2 gap-[20px] my-[40px] md:grid-cols-1'>
                <div className='testimonialsBox'>
                    <div className="testimonialsImgBox">
                        <img className='testimonialsImg' src={user1} alt="" />
                    </div>
                    <p className='font-[italic]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus repudiandae praesentium architecto.
                        Recusandae odio iste ipsum consequatur aliquid obcaecati, quam necessitatibus quos laboriosam
                        saepe, ullam dolores veritatis sunt error possimus omnis enim?
                        <h4 className='testimonialsBoxH4' style={{borderRight:'4px solid black'}}>
                            Someone Famouse <br /> 
                            <span className='testimonialsBoxSpan'>Website Designer</span>
                        </h4>
                    </p>
                </div>
                <div className='testimonialsBox'>
                    <div className="testimonialsImgBox">
                        <img className='testimonialsImg' src={user2} alt="" />
                    </div>
                    <p className='font-[italic]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus repudiandae praesentium architecto.
                        Recusandae odio iste ipsum consequatur aliquid obcaecati, quam necessitatibus quos laboriosam
                        saepe, ullam dolores veritatis sunt error possimus omnis enim?
                        <h4 className='testimonialsBoxH4' style={{borderRight:'4px solid black'}}>
                            Someone Famouse <br /> 
                            <span className='testimonialsBoxSpan'>Website Designer</span>
                        </h4>
                    </p>
                </div>
                <div className='testimonialsBox'>
                    <div className="testimonialsImgBox">
                        <img className='testimonialsImg' src={user3} alt="" />
                    </div>
                    <p className='font-[italic]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus repudiandae praesentium architecto.
                        Recusandae odio iste ipsum consequatur aliquid obcaecati, quam necessitatibus quos laboriosam
                        saepe, ullam dolores veritatis sunt error possimus omnis enim?
                        <h4 className='testimonialsBoxH4' style={{borderRight:'4px solid black'}}>
                            Someone Famouse <br /> 
                            <span className='testimonialsBoxSpan'>Website Designer</span>
                        </h4>
                    </p>
                </div>
                <div className='testimonialsBox'>
                    <div className="testimonialsImgBox">
                        <img className='testimonialsImg' src={user1} alt="" />
                    </div>
                    <p className='font-[italic]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus repudiandae praesentium architecto.
                        Recusandae odio iste ipsum consequatur aliquid obcaecati, quam necessitatibus quos laboriosam
                        saepe, ullam dolores veritatis sunt error possimus omnis enim?
                        <h4 className='testimonialsBoxH4' style={{borderRight:'4px solid black'}}>
                            Someone Famouse <br /> 
                            <span className='testimonialsBoxSpan'>Website Designer</span>
                        </h4>
                    </p>
                </div>


            </div>
        </div>
    )
}

export default Testimonials;
