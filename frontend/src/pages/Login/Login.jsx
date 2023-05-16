import React from "react";
import RegistrationItem from "../../components/Form/RegistrationItem";
import style from "./style.module.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
    console.log("Hello world!");
  };

  // const onChange = () => {
  //   const remember = document.getElementById("remember-user");
  //   if (remember.checked) {
  //     remember.className += "light";
  //     console.log("mission accomplished");
  //   } else {
  //     remember.className -= "light";
  //   }
  //  сделать  на чистом js
  // };
  // const [checked, setChecked] = useState(false);
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

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
            <RegistrationItem title="login" error={errors.login}>
              <input {...register("login", { required: true })} type="text" />
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
                })}
              />
            </RegistrationItem>
          </div>

          <div className={(style.login__memory, style.memory)}>
            <input
              className={style.memory__inp}
              id="remember-user"
              type="checkbox"
              checked={checked}
              onChange={handleCheck}
            />
            <span className={checked ? "highlighted" : ""}></span>
            {/* Не понимаю почему не отрабатывает */}
            <label className={style.memory__label} htmlFor="remember-user">
              Remember me
            </label>
          </div>

          <div className={style.login__button}>
            <Button text="Sign In" type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/forgotPwd">Forget password?</Link>
          <Link to="/registration">Create new account</Link>
        </div>
      </section>
    </div>
  );
};
