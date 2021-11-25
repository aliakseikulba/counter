import React, {ChangeEvent} from 'react';
import s from './Controller.module.css';
import {Btn} from '../Btn/Btn';
import {Setter} from '../Setter/Setter';

type ControllerPropsType = {
  startValue: number | string
  maxValue: number | string
  setChangeValue: (changeValue: boolean) => void
  changeStartValue: (num: number | string) => void
  changeMaxValue: (num: number | string) => void
  changeCounter: () => void
  isChanged: boolean
}

const Controller = ({
                      startValue,
                      maxValue,
                      changeStartValue,
                      changeMaxValue,
                      changeCounter,
                      setChangeValue,
                      isChanged
                    }: ControllerPropsType) => {

  const onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value === '' ? '' : Number(e.currentTarget.value);
    changeStartValue(value);
  };
  const onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value === '' ? '' : Number(e.currentTarget.value);
    changeMaxValue(value);
  };
  const setValueToCounter = () => {
    setChangeValue(false);
    changeCounter();
  };

  const setterBtnDisable = () => startValue >= maxValue ||
    startValue < 0 || startValue === '' || maxValue === '' || !isChanged;

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