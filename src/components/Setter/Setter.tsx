import React, {ChangeEvent} from 'react';
import s from './Setter.module.css';

type SetterPropsType = {
  name: string
  startValue: number
  maxValue: number
  inputValue: number
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Setter = ({name,startValue, maxValue, inputValue, changeValue}: SetterPropsType) => {

  const setterClass = startValue >= maxValue ? s.errorSetter : s.setter;

  return (
    <div className={s.settings}>
      <div className={s.settingsTitle}>{name}</div>
      <input className={setterClass}
             value={inputValue}
             onChange={changeValue}
             type="number"/>
    </div>
  );
};

export {Setter};