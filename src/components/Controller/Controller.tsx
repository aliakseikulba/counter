import React, {ChangeEvent} from 'react';
import s from './Controller.module.css';
import {Btn} from '../Btn/Btn';
import {Setter} from '../Setter/Setter';

type ControllerPropsType = {
  startValue: number
  maxValue: number
  setChangeValue: (changeValue: boolean) => void
  changeStartValue: (num: number) => void
  changeMaxValue: (num: number) => void
  changeCounter: () => void
}

const Controller = ({
                      startValue,
                      maxValue,
                      changeStartValue,
                      changeMaxValue,
                      changeCounter,
                      setChangeValue
                    }: ControllerPropsType) => {

  const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    changeStartValue(value);
  };
  const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.currentTarget.value);
    changeMaxValue(value);
  };
  const setValueToCounter = () => {
    setChangeValue(false);
    changeCounter();
  };

  const setterBtnDisable = () => startValue >= maxValue;

  return (
    <>
      <div className={s.display}>
        <Setter name="start value:"
                startValue={startValue}
                maxValue={maxValue}
                inputValue={startValue}
                changeValue={onStartValueChange}/>
        <Setter name="max value:"
                startValue={startValue}
                maxValue={maxValue}
                inputValue={maxValue}
                changeValue={onMaxValueChange}/>
      </div>
      <div className={s.buttonsArea}>
        <Btn callback={setValueToCounter} isDisabled={setterBtnDisable()} name={'Set'}/>
      </div>
    </>
  );
};

export {Controller};