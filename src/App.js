import React from 'react';
import './App.css';
import ExtraComp from './ExtraComp'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './action/index';

const App = () => {

  const mystate = useSelector((e) => e.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="main">
        
        {console.log(mystate)}
        <div>
          <button className="buttoninc" onClick={() => dispatch(incNumber(5))}>Increment</button>
          <span className='input'>{mystate}</span>
          <button className="buttondec" onClick={() => dispatch(decNumber())}>Decrement</button>
        </div>
      </div>
      <ExtraComp />
    </div>
  );
}

export default App;
