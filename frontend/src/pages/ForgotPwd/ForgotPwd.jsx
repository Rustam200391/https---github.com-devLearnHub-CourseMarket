import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import RegistrationItem from "../../components/Form/RegistrationItem";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={style.forgot}>
      <section className={style.forgot__container}>
        <h1 className={style.forgot__title}>
          Acce
          <span className={style.forgot__title_green}>SS</span>
        </h1>
        <form
          action="POST"
          className={style.login__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.forgot__list}>
            <RegistrationItem title="email" error={errors.email}>
              <input
                type="text"
                {...register("email", {
                  pattern:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                  required: true,
                })}
              />
            </RegistrationItem>
          </div>
          <div className={style.forgot__button}>
            <Button text="Send reset code" type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/">Go home</Link>
        </div>
      </section>
    </div>
  );
};
