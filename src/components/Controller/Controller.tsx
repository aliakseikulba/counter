import React from 'react';
import s from './Controller.module.css';
import {Btn} from './Btn/Btn';


type ControllerPropsType = {
  increment?: () => void
  reset?: () => void
  counterValue?: number
  maxValue?: number
}

const Controller = ({increment, reset, counterValue, maxValue}: ControllerPropsType) => {

  const disabledIncrement = () => {
    return (counterValue === maxValue);
  };
  const disabledReset = () => {
    return (counterValue === 0);
  };

  return (
    <div className={s.controller}>
      <Btn callback={increment} isDisabled={disabledIncrement} name={'Inc'}/>
      <Btn callback={reset} isDisabled={disabledReset} name={'Reset'}/>
    </div>
  );
};

export {Controller};