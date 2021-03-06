import React, {ChangeEvent} from 'react';
import s from './Setter.module.css';

type SetterPropsType = {
  name: string
  startValue: number | string
  maxValue: number | string
  inputValue: number | string
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Setter = ({name, startValue, maxValue, inputValue, changeValue}: SetterPropsType) => {

  const setterClass = startValue < 0 || startValue >= maxValue ? s.errorSetter : s.setter;

  const valueForRender = Number.isInteger(+inputValue) ? inputValue.toString() : Math.floor(+inputValue).toString();

  return (
    <div className={s.settings}>
      <div className={s.settingsTitle}>{name}</div>
      <input className={setterClass}
             value={valueForRender}
             onChange={changeValue}
             type="number"/>
    </div>
  );
};

export {Setter};