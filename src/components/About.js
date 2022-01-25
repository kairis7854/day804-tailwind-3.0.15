import React from 'react';
import bg1 from '../assets/image/bg1.jpg'

function About() {

    return (
        <div id='about' className='relative min-h-screen px-[40px] pt-[80px] bg-white text-black'>
            <div className='title'>
                <h2 className='my-[.75em] relative uppercase tracking-[2px] text-[1.2em] mb-[30px] flex justify-center'>   
                    <p style={{borderBottom:'2px solid #777',width:'max-content'}}>About Me</p>
                </h2>
            </div>
            <div className='content'>
                <div className='w-[49%] min-w-[49%] '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi ratione quisquam. Ut
                        officia perferendis nesciunt laudantium nisi voluptatibus repudiandae praesentium architecto.
                        Recusandae odio iste ipsum consequatur aliquid obcaecati, quam necessitatibus quos laboriosam
                        saepe, ullam dolores veritatis sunt error possimus omnis enim asperiores ad nemo placeat. Est
                        enim doloribus exercitationem ex quam? Animi incidunt quam suscipit fuga labore et consequuntur
                        reiciendis autem voluptate! In sed veritatis error. Aut, possimus mollitia maiores vel repellat
                        ratione sed enim quia. 
                        <br/><br/>
                        voluptatem non quibusdam laboriosam voluptates nisi nostrum, laudantium voluptate
                        eveniet nobis recusandae. Cumque dicta tempore accusantium suscipit, natus inventore
                        necessitatibus officiis illo! Ipsum alias totam quos repellat soluta dolor accusantium nobis
                        repudiandae quas inventore, non molestias voluptas asperiores maxime cum quaerat laboriosam
                        quidem natus laborum perferendis voluptatum consectetur amet! Nihil, optio.</p>
                </div>
                <div className='ml-[40px]'>
                    <img src={bg1} alt="bg1" />
                </div>
            </div>
        </div>
    )
}

export default About;
