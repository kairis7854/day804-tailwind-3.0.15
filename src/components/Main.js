import React from 'react';
import Topbar from './Topbar';
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Project from './Project'
import classNames from '../utils/classNames';

function Main({ toggleState, setToggleState }) {

    return (
        <div className={classNames(toggleState ? 'w-[calc(100%_-_300px)] left-[300px]' : 'w-full left-0', 'absolute bg-white min-h-screen transition-all duration-500')}>
            <Topbar toggleState={toggleState} setToggleState={setToggleState} />
            <Banner />
            <About />
            <Services />
            <Project />
        </div>
    )
}

export default Main;
