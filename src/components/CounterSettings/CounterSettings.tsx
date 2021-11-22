import React from 'react';
import s from './CounterSettings.module.css'
import {Display} from '../Display/Display';
import {Controller} from '../Controller/Controller';

const CounterSettings = () => {
  return (
    <div className={s.wrapper}>
      <Controller />
    </div>
  );
};

export {CounterSettings};