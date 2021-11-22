import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Btn.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type BtnPropsType = DefaultButtonPropsType & {
  callback?: () => void
  isDisabled?: () => boolean
  name: string
}

const Btn = ({callback, isDisabled, name}: BtnPropsType) => {

  const onDisabled = isDisabled!();
  const btnClass = onDisabled ? `${s.disabled}` : `${s.btn}`;

  return (
    <>
      <button className={btnClass} onClick={callback} disabled={onDisabled}>{name}</button>
    </>
  );
};

export {Btn};