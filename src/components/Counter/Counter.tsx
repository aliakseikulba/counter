import React, {useState} from 'react';
import s from './Counter.module.css';
import {Btn} from '../Btn/Btn';

type CounterPropsType = {
  counter: number
  startValue: number
  maxValue: number
  incrementValue: () => void
  resetValue: () => void
}

const Counter = ({counter, startValue, maxValue, incrementValue, resetValue}: CounterPropsType) => {


  const contentClass = counter === maxValue ? `${s.contentFinal}` : `${s.content}`;

  const disableIncrementBtn = () => {
    return (counter === maxValue);
  };
  const disableResetBtn = () => {
    return (counter === startValue);
  };


  return (
    <>
      <div className={s.display}>
        <div className={contentClass}>{counter}</div>
      </div>
      <div className={s.buttonsArea}>
        <Btn callback={incrementValue} isDisabled={disableIncrementBtn} name={'Inc'}/>
        <Btn callback={resetValue} isDisabled={disableResetBtn} name={'Reset'}/>
      </div>
    </>
  );
};

export {Counter};