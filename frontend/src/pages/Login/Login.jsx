import React from "react";
import RegistrationItem from "../../components/Form/RegistrationItem";
import style from '../../assets/style/Pages/login.module.scss';
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
export const Login = () => {


  return (
    <div className={style.login}>
      <section className={style.login__container}>
        <h1 className={style.login__title}>
          Log
          <span className={(style.login__title, style.login__title_green)}>
            In
          </span>
        </h1>
        <form action="#" className={style.login__form}>
          <div className={style.login__item}>
            <RegistrationItem title="login" type="text" error={false} />
          </div>
          <div className={style.login__item}>
            <RegistrationItem title="password" type="password" error={false} />
          </div>

          <div className={(style.login__memory, style.memory)}>
            <input
              className={style.memory__inp}
              id="remember-user"
              type="checkbox"
            />
            {/* сделать пользовательский чекбокс */}
            <label className={style.memory__label} htmlFor="remember-user">
              Remember me
            </label>
          </div>

          <div className={style.login__button}>
            <Button text="Sign In" type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/smth">Forget password?</Link>
          <Link to="/registration">Create new account</Link>
        </div>
      </section>
    </div>
  );
};
