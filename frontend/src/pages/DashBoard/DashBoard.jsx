import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const DashBoard = () => {
  return (
    <section className={style.container}>
      <div className="container">
        <div className="list__wrapper">

        </div>
        <div className="layout__content">
          
        </div>
      </div>
      <a href="https://i.learnhub.ru/courses" alt="LeatnHub"></a>
      <div className={style.text}>Вы успешно зашли к нам на огонёк</div>
      <Link to="/">Вход в аккаунт</Link>
    </section>
  );
};
