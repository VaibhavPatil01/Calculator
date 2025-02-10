import './App.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {

  let [displayString,setDisplayString] = useState("");

  let onClickHandler = (btn) => {
    if(btn == 'AC'){
      setDisplayString("");
    }
    else if(btn == 'C'){
      let newString = displayString.substring(0,displayString.length-1);
      setDisplayString(newString); 
    }
    else if(btn == '='){
      let result = eval(displayString).toString();
      setDisplayString(result); 
    }
    else{
      let newString = displayString+=btn;
      setDisplayString(newString); 
    }
  }

  return (
    <div className="calculator"> 
      <Display displayString={displayString}/>
      <Buttons onClickHandler={onClickHandler}/>
    </div>
  )
}

export default App
