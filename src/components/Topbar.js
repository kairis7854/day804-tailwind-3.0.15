import React from 'react';
import classNames from '../utils/classNames';

function Topbar({ toggleState, setToggleState }) {

    return (
        <div className={classNames(toggleState? ' w-[calc(100%_-_300px)] left-[300px]' :'w-full left-0',
        'fixed top-0 h-[60px]  bg-white border-1 border-solid border-[rgba(0,0,0,.5)] px-[40px] flex justify-between items-center z-50  transition-all duration-500 lg:w-full lg:left-0 lg:px-[20px] dark:bg-[#444]')}>
            <a className='text-black font-bold text-[1.4em] uppercase tracking-[1px] dark:text-white' href="">Portfolio</a>
            <div className='relative w-[60px] h-[60px] cursor-pointer flex justify-center items-center text-[24px] text-black dark:text-white'
                onClick={() => { setToggleState(!toggleState) }}
            >
                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    )
}

export default Topbar;
