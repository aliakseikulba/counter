import React from 'react';
import s from './Counter.module.css';
import {Btn} from '../Btn/Btn';

type CounterPropsType = {
  counter: number | string
  startValue: number | string
  maxValue: number | string
  changeValue: boolean
  incrementValue: () => void
  resetValue: () => void
}

const Counter = ({
                   counter,
                   startValue,
                   maxValue,
                   incrementValue,
                   resetValue,
                   changeValue
                 }: CounterPropsType) => {


  const counterClass = counter >= maxValue ? s.counterFinal : s.counter;
  const errorTitle = () => startValue >= maxValue || startValue < 0;

  const disableIncrementBtn = () => {
    return counter >= maxValue;
  };
  const disableResetBtn = () => {
    return counter >= startValue;
  };

  const counterForRender = +counter > maxValue ? Math.floor(+counter) : counter;

  return (
    <>
      <div className={s.display}>
        {!changeValue && <div className={counterClass}>{counterForRender}</div>}
        {changeValue && !errorTitle() && <div className={s.counterTitle}>change value and press 'Set'</div>}
        {errorTitle() && <div className={s.errorTitle}>incorrect value!</div>}
      </div>
      <div className={s.buttonsArea}>
        <Btn callback={incrementValue} isDisabled={changeValue || disableIncrementBtn()} name={'Inc'}/>
        <Btn callback={resetValue} isDisabled={changeValue || disableResetBtn()} name={'Reset'}/>
      </div>
    </>
  );
};

export {Counter};