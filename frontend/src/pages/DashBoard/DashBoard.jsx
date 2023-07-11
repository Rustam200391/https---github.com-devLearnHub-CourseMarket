import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
      <header className={style.container}>
        <div className={style.container__inner}>
          <Link to="/" className={style.inner_forward}>
            Вперед
          </Link>
          {/* здесь будет ссылка на домашнюю страницу и другой цвет у кнопки */}
          <div className={style.list__wrapper}></div>
          <div className={style.layout__content}></div>
        </div>
        <div className={style.text}>Вы успешно зашли к нам на огонёк</div>
        {/* <Link to="/">Вход в аккаунт</Link> */}
      </header>
      <main className={style.main}></main>
    </>
  );
};
