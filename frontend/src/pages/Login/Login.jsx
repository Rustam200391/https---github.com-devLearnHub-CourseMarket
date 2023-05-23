import React from "react";
import RegistrationItem from "../../components/Form/RegistrationItem";
import style from "./style.module.scss";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    const url = "http://localhost:8000/auth/token/login/";
    try {
      await axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/dashboard");
          }
        });
    } catch (err) {
      console.warn("ошибка", err);
    }
  };

  const regexpPass = /^[a-z0-9!?]{8,}$/;
  //регулярное выражение для пароля состоящего из букв и цифр с нижним подчеркиванием и знаков ! и ? и все это в количестве от 8 символов

  return (
    <div className={style.login}>
      <section className={style.login__container}>
        <h1 className={style.login__title}>
          Log
          <span className={style.login__title_green}>In</span>
        </h1>

        <form
          action="POST"
          className={style.login__form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.login__item}>
            <RegistrationItem title="email" error={errors.login}>
              <input
                {...register("email", {
                  required: true,
                  // placeholder: "*****@domen.ru/com/net",
                })}
                type="text"
              />
            </RegistrationItem>
          </div>
          <div className={style.login__item}>
            <RegistrationItem
              title="password"
              type="password"
              error={errors.password}
            >
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  pattern: regexpPass,
                })}
              />
            </RegistrationItem>
          </div>

          <div className={(style.login__memory, style.memory)}>
            {/* <span className={style.memory__customInput}></span> */}
            <input
              className={style.memory__input}
              id="remember-user"
              type="checkbox"
            />

            <label className={style.memory__label} htmlFor="remember-user">
              Remember me
            </label>
          </div>

          <div className={style.login__button}>
            <Button text="Sign In" type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/forgotPwd">Forgot password?</Link>
          <Link to="/registration">Create new account</Link>
        </div>
      </section>
    </div>
  );
};
