import { useState } from 'react'
import Navigation from './components/Navigation';
import Main from './components/Main';
import './App.css';

function App() {
  const [toggleState, setToggleState] = useState(true)

  return (
    <div className="App relative w-full">
      <Navigation toggleState={toggleState}/>
      <Main toggleState={toggleState} setToggleState={setToggleState}/>
    </div>
  );
}

export default App;
