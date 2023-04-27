import React from "react";
import styles from './input.module.scss';

export const Input = (props) => {

  return (
    <input type={props.type} value={props.text} className={styles.btn} />
    )
}
// props принимает тип и значение