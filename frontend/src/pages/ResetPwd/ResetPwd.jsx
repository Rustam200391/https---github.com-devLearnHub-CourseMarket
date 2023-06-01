import { Link, useNavigate } from "react-router-dom";
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

  //в ссылку вставить id и токен
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
          if (res.status === 200) {
            navigate("/reset");
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
            <RegistrationItem title="новый пароль" error={errors.password}>
              <input
                id="password"
                type="password"
                {...register("new_password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  validate: checkPassword,
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
          <div className={style.reset__list}>
            <RegistrationItem
              title="подтверждение пароля"
              error={errors.re_password}
            >
              <input
                id="confirmpswd"
                type="password"
                {...register("re_password", {
                  pattern: /^[a-z0-9!?]{8,}$/,
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.re_password?.type === "required" && (
                <span role="alert">Повторите пароль для подтверждения</span>
              )}
            </RegistrationItem>
          </div>
        </form>
        <div className={style.reset__button}>
          <Button text="Reset Password " type="submit" />
        </div>
        <div className={style.links}>
          <Link to="/:uid/:token/">Go Home</Link>
        </div>
      </section>
    </div>
  );
};
