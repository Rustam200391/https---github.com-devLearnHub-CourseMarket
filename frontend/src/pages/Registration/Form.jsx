import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import style from "./style.module.scss";
import RegistrationItem from "../../components/Form/RegistrationItem.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { phoneNumber, username, email, password, re_password } = data;
    const url = "http://localhost:8000/api/v1/users/";
    await axios
      .post(url, {
        
          "phoneNumber": phoneNumber,
          "username": username,
          "email": email,
          "password": password,
          "re_password": re_password
      
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const checkPassword = () => {
    const password = document.getElementById("password").value;
    const confirmpswd = document.getElementById("confirmpswd").value;
    return password === confirmpswd || false;
  };

  return (
    <div className={style.form}>
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
          <div className={style.form__list}>
            <RegistrationItem title="login" error={errors.login}>
              <input
                {...register("username", { required: true })}
                type="text"
              />
            </RegistrationItem>
          </div>

          <div className={style.form__list}>
            <RegistrationItem title="Phone" error={errors.phone}>
              <input
                type="tel"
                {...register("phoneNumber", {
                  pattern: /^(\+?\d{1,})$/i,
                  required: true,
                })}
              />
            </RegistrationItem>
          </div>

          <div className={style.form__list}>
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

          <div className={style.form__list}>
            <RegistrationItem title="password" error={errors.password}>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  validate: checkPassword,
                })}
              />
            </RegistrationItem>
          </div>

          <div className={style.login__list}>
            <RegistrationItem
              title="confirm password"
              error={errors.confirmpwd}
            >
              <input
                id="confirmpswd"
                type="password"
                {...register("re_password", {
                  required: true,
                  validate: checkPassword,
                })}
              />
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