import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import RegistrationItem from "../../../components/Form/RegistrationItem";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //нужно извлечь uid и токен из ссылки на сброс пароля и передать в url

  const [uid, setUid] = useState();
  const [token, setToken] = useState();

  const url = useLocation().pathname;

  useEffect(() => {
    const arrUid = url.split("/");
    console.log(arrUid);
    setUid(arrUid[3]);
    setToken(arrUid[4]);
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { new_password, re_new_password } = data;
    const url = `http://localhost:8000/password/reset/${uid}/${token}/`;

    try {
      await axios
        .post(url, {
          new_password: new_password,
          re_new_password: re_new_password,
        })
        .then((res) => {
          console.log("ответ", res);
          if (res.status === 200) {
            navigate("/");
          }
        });
    } catch (err) {
      console.warn("ошибка", err);
    }
  };

  const checkPassword = () => {
    const password = document.getElementById("password").value;
    const confirmpswd = document.getElementById("confirmpswd").value;
    return password === confirmpswd || false;
  };

  return (
    <div className={style.reset}>
      <section className={style.reset__container}>
        <h1 className={style.reset__title}>
          Res
          <span className={style.reset__title_green}>et</span>
        </h1>
        <form
          action="POST"
          className={style.reset__registration}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.reset__list}>
            <RegistrationItem title="новый пароль" error={errors.new_password}>
              <input
                id="password"
                type="password"
                {...register("new_password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.new_password?.type === "required" && (
                <span>Введите пароль</span>
              )}
              {errors.new_password?.type === "minLength" && (
                <span>min Length 9 characters</span>
              )}
            </RegistrationItem>
          </div>
          <div className={style.reset__list}>
            <RegistrationItem
              title="подтверждение пароля"
              error={errors.re_new_password}
            >
              <input
                id="confirmpswd"
                type="password"
                {...register("re_new_password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.re_new_password?.type === "required" && (
                <span role="alert">Повторите пароль для подтверждения</span>
              )}
            </RegistrationItem>
          </div>
          <div className={style.reset__button}>
            <Button text="Reset Password " type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/">Go Home</Link>
        </div>
      </section>
    </div>
  );
};
