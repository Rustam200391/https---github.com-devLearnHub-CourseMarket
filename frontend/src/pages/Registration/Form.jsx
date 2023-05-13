import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';
import style from './style.module.scss';
import RegistrationItem from '../../components/Form/RegistrationItem.tsx';
import { useForm } from 'react-hook-form';


export const Form = () => {
  

  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const handleRegistration = (data) => console.log(data);
  // const handleError = (errors) => {};

  // const registerOptions = {
  //   name: { required: "Name is required" },
  //   email: { required: "Email is required" },
  //   password: {
  //     required: "Password is required",
  //     minLength: {
  //       value: 8,
  //       message: "Password must have at least 8 characters"
  //     }
  //   }
  // };


  return (
      <div className={style.form}>
        <section className={style.form__container}>
        <h1 className={style.form__title}>
        Sign
          <span className={style.form__title, style.form__title_green }>
          Up
          </span>
        </h1>
        <form action="POST"    className={style.form__registration} >
        {/* onSubmit={handleSubmit(handleRegistration, handleError)} */}
          <div className={style.form__list}>
            <RegistrationItem name="login"  />
            {/* {...register('name', registerOptions.name) }
            {errors?.name && errors.name.message} */}
          </div>
          <div className={style.form__list}>
            <RegistrationItem title="mobile number" type="tel" error={false}/>
          </div>
          <div className={style.form__list}>
            <RegistrationItem type="email" name="email" />
            {/* {...register('email', registerOptions.email) } 
            {errors?.email && errors.email.message} */}
          </div>
          <div className={style.form__list}>
            <RegistrationItem title="password" type="password" error={false} />
            {/* {...register('password', registerOptions.password) } 
            {errors?.password && errors.password.message} */}
          </div>
          <div className={style.login__list}>
            <RegistrationItem title="confirmPwd" type="password" error={false} />
          </div>
           
        </form>
        <div className={style.form__button}>
        < Button text ="Sign up" type="submit" />
        </div>
        <div className={style.links}>
          <Link to="/">Go home</Link>
        </div>
        </section>
      </div>
  );
}
