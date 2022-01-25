import React from 'react';
import classNames from '../utils/classNames'


function Navigation({ toggleState }) {

    const scrollToAnchor = (item) => {
        if (item) {
            let anchorElement = document.getElementById(item);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }

    return (
        <div className={classNames(toggleState ? 'w-[300px]' : 'w-0', 'fixed h-full border-1 border-solid border-[rgba(0,0,0,.5)] bg-[#fff] flex justify-center items-center overflow-hidden transition')}>
            <ul className='relative top-0 left-0 w-full py-[20px] px-[40px]' >
                <li className='navigationLi' onClick={()=>{scrollToAnchor('about')}}>About</li>
                <li className='navigationLi' onClick={()=>{scrollToAnchor('home')}}>Home</li>
                <li className='navigationLi' onClick={()=>{scrollToAnchor('services')}}>Services</li>
                <li className='navigationLi' onClick={()=>{scrollToAnchor('project')}}>Project</li>
                <li className='navigationLi' onClick={()=>{scrollToAnchor('testimonials')}}>Testimonials</li>
                <li className='navigationLi' onClick={()=>{scrollToAnchor('contact')}}>Contact</li>
            </ul>
        </div>
    )

}

export default Navigation;
