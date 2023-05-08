import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../assets/style/Pages/forgotpwd.module.scss';
import RegistrationItem from '../../components/Form/RegistrationItem';
import Button from '../../components/Button/Button';

export const Forgotpwd = () => {
  return (
    <div className={style.forgot}>
      <section className={style.forgot__container}>
      <h1 className={style.forgot__title}>Acce 
      <span className={style.forgot__title, style.forgot__title_green}>
      ss 
      </span>
      </h1>
      <form action="POST" className={style.forgot__registration}>
        <div className={style.forgot__list}>
        <RegistrationItem title="Email" type="text" error={false} />
        </div>
      </form>
      <div className={style.forgot__button}>
      <Button text="Send Reset Code" type="submit" />
      </div>
      <div className={style.links}>
          <Link to="/">Go home</Link>
      </div>
      </section>
    </div>
  )
}

