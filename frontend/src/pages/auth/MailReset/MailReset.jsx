import React from "react";
import style from "./style.module.scss";

export const MailReset = () => {
  return (
    <div className={style.mailreset}>
      <section className={style.mailreset__container}>
        <h1 className={style.mailreset__title}>
          {" "}
          К вам на почту пришла
          <span className={style.mailreset__title_green}> ссылка </span>для
          сброса пароля
        </h1>
      </section>
    </div>
  );
};
