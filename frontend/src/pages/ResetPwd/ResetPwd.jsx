import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import RegistrationItem from "../../components/Form/RegistrationItem";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";

export const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
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
          <div className={style.reset__list}>
            <RegistrationItem
              title="confirm password"
              error={errors.confirmpwd}
            >
              <input
                id="confirmpswd"
                type="password"
                {...register("confirmpwd", {
                  required: true,
                  validate: checkPassword,
                })}
              />
            </RegistrationItem>
          </div>
        </form>
        <div className={style.reset__button}>
          <Button text="Reset Password " type="submit" />
        </div>
        <div className={style.links}>
          <Link to="/">Go Home</Link>
        </div>
      </section>
    </div>
  );
};
