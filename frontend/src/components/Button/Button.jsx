import React from 'react'
import style from './style.module.scss';

const Button = (props) => {
  return  <button type={props.type} className={style.button}>
            {props.text}
          </button>;
}

export default Button