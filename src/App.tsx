import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Controller} from './components/Controller/Controller';

function App() {

  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(5);
  const [counter, setCounter] = useState<number>(startValue);

  const changeStartValue = (num: number) => {
    setStartValue(num);
  };
  const changeMaxValue = (num: number) => {
    setMaxValue(num);
  };

  const changeCounter = () => {
    setCounter(startValue);
  }

  const incrementValue = () => {
    setCounter(counter => counter + 1);
  };
  const resetValue = () => {
    setCounter(startValue);
  };

  return (
    <div className="App">
      <h1 className="title">custom counter</h1>
      <div className="content">
        <div className="wrapper">
          <Controller startValue={startValue}
                      maxValue={maxValue}
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      changeCounter={changeCounter}/>
        </div>
        <div className="wrapper">
          <Counter counter={counter}
                   startValue={startValue}
                   maxValue={maxValue}
                   incrementValue={incrementValue}
                   resetValue={resetValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
