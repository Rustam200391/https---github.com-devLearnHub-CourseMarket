import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button'
import style from '../../assets/style/Pages/form.module.scss'


export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phoneValue, setPhoneValue] = useState("");

  const [show,setShow] = useState()

  const onSubmit = (data) => {
    for (const dataKey in data) {
      localStorage.setItem(dataKey, JSON.stringify(data[dataKey]));
    }
  };


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

  return (
      <div className={style.form}>
        <section className={style.form__container}>
        <h1 className={style.form__title}>
          Registration
          <span className={style.form__title, style.form__title_blue }>
          form
          </span>
        </h1>
        <form action="#" className={style.form__register}>
          <div>
            <h2 onClick={() => setShow(!show)}>Sign Up</h2> 
            {/* <p>{show ? "The service" : "Enjoy"}</p> 

            <h3>Registration process after filling out the form...</h3> */}
          </div>

          <form
            action="POST"
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", {
                required: "Username name is required",
              })}
              placeholder="username"
            />
            {errors.username?.type === "required" && (
              <p role="alert">Username name is required</p>
            )}

            <input
              type="telNo"
              {...register("mobile", {
                required: "Mobile number is required.",
                minLength: {
                  value: 11,
                  message: "This input must exceed 10 characters",
                },
              })}
              placeholder="mobile number"
              onChange={onChangeNumber}
              value={phoneValue}
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "minLength" && "Min Length 11 characters"}

            <input
              type="email"
              {...register("mail", {
                required: "Email Address is required",
              })}
              placeholder="email address"
              // aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input
              type="text"
              {...register("password", {
                required: "Password name is required",
              })}
              placeholder="password"
            />
            {errors.password?.type === "required" && (
              <p role="alert">Password name is required</p>
            )}

            <input
              type="text"
              {...register("confirmPassword", {
                required: "Confirm password name is required",
              })}
              placeholder="confirm password"
            />
            {errors.confirmPassword?.type === "required" && (
              <p role="alert">Confirm password name is required</p>
            )}

            <input
              type='submit'
              value='Submit'
              className='btn'
            />

            <p>
        
              Have an account ? <Link to="/login"> Login </Link>
            </p>
          </form>
        </form>
        <div className={style.form__button}>
        < Button />
        </div>
        <div className={style.links}>
          <Link to="/smth">Forget password?</Link>
          <Link to="/">Go home</Link>
        </div>
        </section>
      </div>
  );
};
