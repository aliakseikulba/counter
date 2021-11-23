import React from 'react';
import s from './../Counter/Counter.module.css'
import {Btn} from '../Btn/Btn';

const Controller = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.display}></div>
      <div className={s.buttonsArea}>
        <Btn callback={() => {}} isDisabled={() => false} name={'Set'}/>
      </div>
    </div>
  );
};

export {Controller};