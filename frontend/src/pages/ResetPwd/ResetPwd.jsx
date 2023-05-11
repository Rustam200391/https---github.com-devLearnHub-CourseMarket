import React from "react";
import { Link } from "react-router-dom";
import style from './style.module.scss';
import RegistrationItem from "../../components/Form/RegistrationItem";
import Button from "../../components/Button/Button";


export const ResetPassword = () => {
  
  return (
    <div className={style.reset}>
      <section className={style.reset__container}>
        <h1 className={style.reset__title}>Res
        <span className={style.reset__title, style.reset__title_green}>
        et 
        </span>
        </h1>
        <form action="POST" className={style.reset__registration}>
          <div className={style.reset__list}>
            <RegistrationItem title="New Password" type="text" error={false} />
          </div>
          <div className={style.reset__list}>
            <RegistrationItem title="Confirm Password" type="text" error={false} />
          </div>
        </form>
        <div className={style.reset__button}>
        <Button text="Reset Password " type="submit"/>
        </div>
        <div className={style.links}>
        <Link to="/">Go Home</Link>
        </div>
      </section>
    </div>
  );
};
