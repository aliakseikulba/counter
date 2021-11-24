import React from 'react';
import s from './Btn.module.css';

type BtnPropsType = {
  callback: () => void
  isDisabled: boolean
  name: string
}

const Btn = ({callback, isDisabled, name}: BtnPropsType) => {

  const btnClass = isDisabled ? `${s.disabled}` : `${s.btn}`;

  return (
    <>
      <button className={btnClass} onClick={callback} disabled={isDisabled}>{name}</button>
    </>
  );
};

export {Btn};