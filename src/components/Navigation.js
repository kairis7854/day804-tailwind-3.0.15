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
    const toggleSvg = () => {
        const svg = dark
            ? <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            : <svg className="h-6 w-6 text-white " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
        return svg
    }
    const toggleText = () => {
        const text = dark
            ? 'Switch To Light Mode'
            : 'Switch To Night Mode'
        return text
    }


    return (
        <div className={classNames(toggleState ? 'w-[300px] lg:left-0  ' : 'w-0  lg:left-[-100%]',
            'fixed h-full border-1 border-solid [borderRight:1px_solid_rgba(0,0,0,.05)] bg-white flex justify-center items-center overflow-hidden transition-all duration-500 lg:w-full  dark:bg-gray dark:[borderRight:1px_solid_rgba(0,0,0,.5)]')}>
            <ul className='relative top-0 left-0 w-full py-[20px] px-[40px]  lg:p-[20px]' >
                <li className='navigationLi' onClick={() => { scrollToAnchor('home'); fixToggle() }}>Home</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('about'); fixToggle() }}>About</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('services'); fixToggle() }}>Services</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('project'); fixToggle() }}>Project</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('testimonials'); fixToggle() }}>Testimonials</li>
                <li className='navigationLi' onClick={() => { scrollToAnchor('contact'); fixToggle() }}>Contact</li>
            </ul>
            <div onClick={() => { setDark(!dark) }} className='absolute bottom-[20px] left-[40px] w-[30px] h-[30px] bg-black cursor-pointer rounded-[50%] flex justify-center items-center dark:bg-white'>
                {toggleSvg()}
                <div className='whitespace-nowrap absolute left-[40px] text-[.7em] font-[300] tracking-[1px] dark:text-white'>
                    {toggleText()}
                </div>
            </div>
        </div>
    )

}

export default Navigation;
