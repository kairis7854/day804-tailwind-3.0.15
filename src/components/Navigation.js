import React from 'react';
import classNames from '../utils/classNames'


function Navigation({ toggleState, setToggleState, dark, setDark }) {

    const scrollToAnchor = (item) => {
        if (item) {
            let anchorElement = document.getElementById(item);
            if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
        }
    }
    const fixToggle = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            setToggleState(false)
        }
    }


    return (
        <div className={classNames(toggleState ? 'w-[300px] lg:left-0 lg:w-full  ' : 'w-0  lg:left-[-100%]',
            'fixed h-full border-1 border-solid border-[rgba(0,0,0,.5)] bg-[#fff] flex justify-center items-center overflow-hidden transition-all dark:bg-[#444]')}>
            <ul className='relative top-0 left-0 w-full py-[20px] px-[40px]  lg:p-[20px]' >
                <li className='navigationLi' onClick={() => { scrollToAnchor('home'); fixToggle() }}>Home</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('about'); fixToggle() }}>About</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('services'); fixToggle() }}>Services</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('project'); fixToggle() }}>Project</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('testimonials'); fixToggle() }}>Testimonials</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('contact'); fixToggle() }}>Contact</li>
            </ul>
            <div onClick={()=>{setDark(!dark)}} className='absolute bottom-[20px] left-[40px] w-[30px] h-[30px] bg-black cursor-pointer rounded-[50%] flex justify-center items-center dark:bg-white'>
                <svg className="h-6 w-6 text-white dark:text-[#444]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                <div className='whitespace-nowrap absolute left-[40px] text-[.7em] font-[300] tracking-[1px]'>Switch To Night Mode</div>
            </div>
        </div>
    )

}

export default Navigation;
