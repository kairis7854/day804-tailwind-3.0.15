import React from 'react';
import Topbar from './Topbar';
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Project from './Project'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Copyright from './Copyright'
import classNames from '../utils/classNames';

function Main({ toggleState, setToggleState }) {

    return (
        <div className={classNames(toggleState ? 'w-[calc(100%_-_300px)] left-[300px] lg:left-[100%]' : 'w-full left-0  lg:left-0', 'absolute bg-white min-h-screen transition-all duration-500 lg:w-full dark:bg-[#333]')}>
            <Topbar toggleState={toggleState} setToggleState={setToggleState} />
            <Banner />
            <About />
            <Services />
            <Project />
            <Testimonials  />
            <Contact />
            <Copyright />
        </div>
    )
}

export default Main;
