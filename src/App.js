import { useState } from 'react'
import Navigation from './components/Navigation';
import Main from './components/Main';
import classNames from './utils/classNames';
import './App.css';

function App() {
  const [toggleState, setToggleState] = useState(true)
  const [dark, setDark] = useState(false)

  return (
    <div className={classNames(dark ? 'dark' : '', 'App relative w-full ')}>
      <Navigation toggleState={toggleState} setToggleState={setToggleState} dark={dark} setDark={setDark} />
      <Main toggleState={toggleState} setToggleState={setToggleState} />
    </div>
  );
}

export default App;
