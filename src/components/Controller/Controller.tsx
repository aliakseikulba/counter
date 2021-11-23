import React, {ChangeEvent} from 'react';
import s from './Controller.module.css'
import {Btn} from '../Btn/Btn';
import {Setter} from '../Setter/Setter';

type ControllerPropsType = {
  startValue: number
  maxValue: number
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
  changeCounter: () => void
}

const Controller = ({startValue, maxValue, changeStartValue, changeMaxValue, changeCounter}: ControllerPropsType) => {

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    changeStartValue(value)
  }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    changeMaxValue(value);
  }

  const setValueToCounter = () => {
    changeCounter();
  }

  return (
    <>
      <div className={s.display}>
       <Setter name="start value:"
                value={startValue}
               changeValue={onChangeStartValue}/>
        <Setter name="max value:"
                value={maxValue} changeValue={onChangeMaxValue}/>
      </div>
      <div className={s.buttonsArea}>
        <Btn callback={setValueToCounter} isDisabled={() => false} name={'Set'}/>
      </div>
    </>
  );
};

export {Controller};