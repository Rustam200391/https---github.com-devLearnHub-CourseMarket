import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../assets/style/Pages/resetpwd.module.scss';
import RegistrationItem from '../../components/Form/RegistrationItem';
import Button from '../../components/Button/Button';

export const ResetPassword = () => {
  return (
    <div className={style.reset}>
      <section className={style.reset__container}>
      <h1 className={style.reset__title}>Acc 
      <span className={style.reset__title, style.reset__title_green}>
      ess 
      </span>
      </h1>
      <form action="Post" className={style.reset__registration}>
        <div className={style.reset__list}>
        <RegistrationItem title="Email" type="text" error={false} />
        </div>
      </form>
      <div className={style.reset__button}>
      <Button text="Send Reset Code" type="submit" />
      </div>
      <div className={style.links}>
          <Link to="/">Go home</Link>
      </div>
      </section>
    </div>
  )
}

