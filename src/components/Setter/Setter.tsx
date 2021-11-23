import React, {ChangeEvent} from 'react';
import s from './Setter.module.css';

type SetterPropsType = {
  name: string
  value: number
  changeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

const Setter = ({name, value, changeValue}: SetterPropsType) => {



  return (
    <div className={s.settings}>
      <div className={s.settingsTitle}>{name}</div>
      <input className={s.valueInput}
             value={value}
             onChange={changeValue}
             type="number"/>
    </div>
  );
};

export {Setter};