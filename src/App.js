import React, {useEffect, useState} from 'react';
import './App.css';
import Counters from "./Counter";
import Visible from "./Additional";


function App() {

  useEffect(() => {
    console.log('component App did mount')
  }, [])

  const [count, setCount] = useState(1)

  const sum = (count, digit) => {
    const result = count + digit;
    setCount(result)
  }

  useEffect(() => {
    console.log('count')
  }, [count])

  const [additionalCounter, setAdditionalCounter] = useState(10)

  const additionalSum = (additionalCounter, digit) => {
    const result = additionalCounter + digit;
    setAdditionalCounter(result)
  }

  const [open, setOpen] = useState(false)

  return (
      <div className={'main'}>
        <h1>UseEffects</h1>
        <Counters
            count={count}
            sum={sum}
        />
        <hr/>
        <button onClick={() => setOpen(!open)}> {open ? 'close' : 'open'} </button>
        {open && <Visible
            additionalCounter={additionalCounter}
            additionalSum={additionalSum}
        />}
      </div>
  );
}

export default App;
