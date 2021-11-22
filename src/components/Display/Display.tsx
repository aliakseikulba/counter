import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
  content: number
  counterValue: number
  maxValue: number
}

const Display = ({content, counterValue, maxValue}:DisplayPropsType) => {

  const contentClass = counterValue === maxValue ? `${s.contentFinal}` : `${s.content}`;

  return (
    <div className={s.display}>
      <div className={contentClass}>{content}</div>
    </div>
  );
};

export {Display};
