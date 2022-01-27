import { useState } from 'react'
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.css';

function App() {
  const [toggleState, setToggleState] = useState(true)
  const [dark,setDark] = useState(false)

  return (
    <div className="App relative w-full dark ">
      <Navigation toggleState={toggleState} setToggleState={setToggleState} dark={dark} setDark={setDark}/>
      <Main toggleState={toggleState} setToggleState={setToggleState}/>
    </div>
  );
}

export default App;
