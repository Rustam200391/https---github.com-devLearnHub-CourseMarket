import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import RegistrationItem from "../../components/Form/RegistrationItem";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email } = data;

    const url = "http://localhost:8000/api/v1/users/reset_password/";
    try {
      await axios
        .post(url, {
          email: email,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 204) {
            navigate("/mailreset");
          }
        });
    } catch (err) {
      console.warn("ошибка", err);
    }
  };

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
            <RegistrationItem title="электронная почта" error={errors.email}>
              <input
                type="text"
                {...register("email", {
                  pattern:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <span role="alert">Введите почту</span>
              )}
              {errors.email?.type === "minLength" && (
                <span role="alert">min Length 11 characters</span>
              )}
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
