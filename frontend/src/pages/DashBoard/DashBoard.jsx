import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
      <header className={style.container}>
        <div className={style.text}>Вы успешно зашли к нам на огонёк</div>
        {/* <Link to="/">Вход в аккаунт</Link> */}
        <div className={style.container__inner}>
          <div className={style.inner_link}>
            <Link to="/main">Вперед</Link>
          </div>
          {/* здесь будет ссылка на домашнюю страницу и другой цвет у кнопки */}
          <div className={style.list__wrapper}></div>
          <div className={style.layout__content}></div>
        </div>
      </header>
      <main className={style.main}>
        <section className="section__inner"></section>
      </main>
    </>
  );
};
