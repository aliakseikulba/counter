import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Controller} from './components/Controller/Controller';

function App() {

  const [startValue, setStartValue] = useState<number | string>(Number(localStorage.getItem('startValue')) || 0);
  const [maxValue, setMaxValue] = useState<number | string>(Number(localStorage.getItem('maxValue')) || 5);
  const [counter, setCounter] = useState<number | string>(startValue);
  const [changeValue, setChangeValue] = useState<boolean>(true);

  const changeStartValue = (num: number | string) => {
    setChangeValue(true);
    setStartValue(num);
  };
  const changeMaxValue = (num: number | string) => {
    setChangeValue(true);
    setMaxValue(num);
  };
  const changeCounter = () => {
    setCounter(startValue);
  };
  const incrementValue = () => {
    setCounter(counter => +counter + 1);
  };
  const resetValue = () => {
    setCounter(startValue);
  };


  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [startValue, maxValue]);

  return (
    <div className="App">
      <h1 className="title">custom counter</h1>
      <div className="content">
        <div className="wrapper">
          <Controller startValue={startValue}
                      maxValue={maxValue}
                      setChangeValue={setChangeValue}
                      changeStartValue={changeStartValue}
                      changeMaxValue={changeMaxValue}
                      changeCounter={changeCounter}/>
        </div>
        <div className="wrapper">
          <Counter counter={counter}
                   startValue={startValue}
                   maxValue={maxValue}
                   changeValue={changeValue}
                   incrementValue={incrementValue}
                   resetValue={resetValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
