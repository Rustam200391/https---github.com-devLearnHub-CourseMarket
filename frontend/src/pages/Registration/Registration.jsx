import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button/Button";
import style from "./style.module.scss";
import RegistrationItem from "../../components/Form/RegistrationItem.jsx";
import ModalWindow from "../../components/UI/ModalWindow/ModalWindow";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [errorList, setErrorList] = useState({});
  const [showModal, setShowModal] = useState(false);
  const onSubmit = async (data) => {
    const { phoneNumber, username, email, password, re_password } = data;
    const url = "http://localhost:8000/api/v1/users/";
    try {
      await axios
        .post(url, {
          phoneNumber: phoneNumber,
          username: username,
          email: email,
          password: password,
          re_password: re_password,
        })
        .then((res) => {
          if (res.status === 201) {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          console.log("ошибка от сервера");
          console.log(err.response.data);
          setErrorList(err.response.data);
          setShowModal(true);
          setTimeout(() => setShowModal(false), 5000);
        });
    } catch (err) {
      console.warn("ошибка", err);
    }
  };

  const [phoneValue, setPhoneValue] = useState("");

  const onChangeNumber = (event) => {
    const prefixNumber = (str) => {
      if (str === "7") {
        return "7 (";
      }
      if (str === "8") {
        return "7 (";
      }
      if (str === "9") {
        return "7 (9";
      }
      return "7 (";
    };

    const value = event.target.value.replace(/\D+/g, "");
    const numberLength = 11;

    let result = "+";

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += prefixNumber(value[i]);
          continue;
        case 4:
          result += ") ";
          break;
        case 7:
          result += "-";
          break;
        case 9:
          result += "-";
          break;
        default:
          break;
      }
      result += value[i];
    }

    setPhoneValue(result);
  };

  const checkPassword = () => {
    const password = document.getElementById("password").value;
    const confirmpswd = document.getElementById("confirmpswd").value;
    console.log("check1");
    if (password === confirmpswd) {
      console.log("check22222");
      // Валидация обоих полей
      // register("password", { validate: true });
      // register("re_password", { validate: true });

      return;
    } else {
      return false;
    }
  };

  return (
    <div className={style.form}>
      <ModalWindow show={showModal} errorList={errorList} />
      <section className={style.form__container}>
        <h1 className={style.form__title}>
          Sign
          <span className={style.form__title_green}>Up</span>
        </h1>

        <form
          action="POST"
          className={style.form__registration}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={style.form__item}>
            <RegistrationItem title="Логин" error={errors.username}>
              <input
                {...register("username", {
                  required: "username is required.",
                })}
                type="text"
              />
              {errors.username?.type === "required" && (
                <span role="alert">username is required</span>
              )}
            </RegistrationItem>
          </div>

          <div className={style.form__item}>
            <RegistrationItem title="Телефон" error={errors.phoneNumber}>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: true,
                  minLength: {
                    value: 11,
                    message: "This input must exceed 11 characters",
                  },
                })}
                onChange={onChangeNumber}
                value={phoneValue}
              />
              {errors.phoneNumber?.type === "required" && (
                <span role="alert">mobile number is required</span>
              )}
              {errors.phoneNumber?.type === "minLength" && (
                <span role="alert">min Length 11 characters</span>
              )}
            </RegistrationItem>
          </div>

          <div className={style.form__item}>
            <RegistrationItem title="Email" error={errors.email}>
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                })}
              />
              {errors.email?.type === "required" && (
                <span role="alert">adress is required</span>
              )}
              {errors.email?.type === "minLength" && (
                <span role="alert">min Length 11 characters</span>
              )}
            </RegistrationItem>
          </div>

          <div className={style.form__item}>
            <RegistrationItem title="password" error={errors.password}>
              <input
                id="password"
                type="password"
                {...register("password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.password?.type === "required" && (
                <span>password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span>min Length 9 characters</span>
              )}
            </RegistrationItem>
          </div>

          <div className={style.login__list}>
            <RegistrationItem
              title="confirm password"
              error={errors.re_password}
            >
              <input
                id="confirmpswd"
                type="password"
                {...register("re_password", {
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.re_password?.type === "required" && (
                <span role="alert">confirmpwd is required</span>
              )}
            </RegistrationItem>
          </div>

          <div className={style.form__button}>
            <Button text="Sign up" type="submit" />
          </div>
        </form>

        <div className={style.links}>
          <Link to="/">Go home</Link>
        </div>
      </section>
    </div>
  );
};
