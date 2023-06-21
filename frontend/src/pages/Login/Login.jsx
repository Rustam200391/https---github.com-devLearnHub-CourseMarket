import React, { useState, useEffect } from "react";
import RegistrationItem from "../../components/Form/RegistrationItem";
import style from "./style.module.scss";
import Button from "../../components/Button/Button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ModalWindow from "../../components/UI/ModalWindow/ModalWindow";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorList, setErrorList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [uid, setUid] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const arrUid = url.split("/");
    console.log(arrUid);
    setUid(arrUid[1]);
    setToken(arrUid[2]);
  });

  const url = useLocation().pathname;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    // вытащить из ссылки по которой переходим из почты uid,token
    const url = (uid, token) => {
      if (!uid && !token) {
        return "http://localhost:8000/api/v1/token/";
      } else {
        return `http://localhost:8000/users/activate/${uid}/${token}/`;
      }
    };
    console.log(data, url);
    try {
      await axios
        .post(url, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            navigate("/dashboard");
          }
        });
      // .catch((err) => {
      //   console.log(err)
      // })
    } catch (err) {
      console.warn("ошибка", err);
    }
  };

  return (
    <div className={style.login}>
      {/* <h2 className="Order">Order: {params.uid}</h2>
      <h2 className="Order">Order: {params.token}</h2> */}
      <ModalWindow show={showModal} errorList={errorList} />
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
            <RegistrationItem title="электронная почта" error={errors.email}>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
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
          <div className={style.login__item}>
            <RegistrationItem title="пароль" error={errors.password}>
              <input
                id="password"
                type="password"
                {...register("password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  // validate: checkPassword,
                })}
              />
              {errors.password?.type === "required" && (
                <span>Введите пароль</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>min Length 9 characters</span>
              )}
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
              Запомнить
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
