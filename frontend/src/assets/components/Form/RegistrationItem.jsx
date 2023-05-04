import React from 'react'
import style from './style.module.scss' 

const RegistrationItem = (props) => {
 
  return (
    <div className={style.item}>
      <p className={style.title}>{props.title}</p>
      <label className={style.label}>
        <input
          type={props.type}
          className={
            style.input +' ' + (props.error ? style.error : style.correct)
          }
        />
      </label>
    </div>
  );
}

export default RegistrationItem