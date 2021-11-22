import React, {useState} from 'react';
import s from './Counter.module.css';
import {Display} from '../Display/Display';
import {Controller} from '../Controller/Controller';

const Counter = () => {
  let [counter, setCounter] = useState<number>(0);
  const maxValue = 5;

  const incrementValue = () => {
    setCounter(++counter);
  };
  const resetValue = () => {
    setCounter(0);
  };


  return (
    <div className={s.wrapper}>
      <Display content={counter}
               counterValue={counter}
               maxValue={maxValue}/>
      <Controller increment={incrementValue}
                  reset={resetValue}
                  counterValue={counter}
                  maxValue={maxValue}></Controller>
    </div>
  );
};

export {Counter};