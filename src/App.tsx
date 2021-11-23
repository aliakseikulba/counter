import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter';
import {Controller} from './components/Controller/Controller';

function App() {

  const maxValue = 5;
  const initialValue = 0;
  let [counter, setCounter] = useState<number>(initialValue);

  const incrementValue = () => {
    setCounter(counter => counter + 1);
  };
  const resetValue = () => {
    setCounter(initialValue);
  };

  return (
    <div className="App">
      <h1 className="title">custom counter</h1>
      <div className="content">
        <Controller/>
        <Counter counter={counter}
                 initialValue={initialValue}
                 maxValue={maxValue}
                 incrementValue={incrementValue}
                 resetValue={resetValue}/>
      </div>
    </div>
  );
}

export default App;
