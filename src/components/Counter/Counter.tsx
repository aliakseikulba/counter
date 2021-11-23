import React, {useState} from 'react';
import s from './Counter.module.css';
import {Btn} from '../Btn/Btn';

const Counter = () => {
  const maxValue = 5;
  const initialValue = 0;
  let [counter, setCounter] = useState<number>(initialValue);

  const contentClass = counter === maxValue ? `${s.contentFinal}` : `${s.content}`;
  const incrementValue = () => {
    setCounter(counter => counter + 1);
  };
  const resetValue = () => {
    setCounter(initialValue);
  };
  const disableIncrementBtn = () => {
    return (counter === maxValue);
  };
  const disableResetBtn = () => {
    return (counter === initialValue);
  };


  return (
    <div className={s.wrapper}>
      <div className={s.display}>
        <div className={contentClass}>{counter}</div>
      </div>
      <div className={s.buttonsArea}>
        <Btn callback={incrementValue} isDisabled={disableIncrementBtn} name={'Inc'}/>
        <Btn callback={resetValue} isDisabled={disableResetBtn} name={'Reset'}/>
      </div>
    </div>
  );
};

export {Counter};