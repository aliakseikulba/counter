import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Controller} from './components/Controller/Controller';

function App() {

  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [counter, setCounter] = useState<number>(startValue);
  const [changeValue, setChangeValue] = useState<boolean>(false);

  const changeStartValue = (num: number) => {
    setChangeValue(true)
    setStartValue(num);
  };
  const changeMaxValue = (num: number) => {
    setChangeValue(true)
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


  useEffect(() => {
    const startValueAsString = localStorage.getItem('startValue');
    const newStartValue = JSON.parse(startValueAsString!);
    setStartValue(newStartValue);
    setCounter(newStartValue);
    setChangeValue(true);
    const maxValueAsString = localStorage.getItem('maxValue');
    const newMaxValue = JSON.parse(maxValueAsString!);
    setMaxValue(newMaxValue);
  }, [])
  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [startValue, maxValue])

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
