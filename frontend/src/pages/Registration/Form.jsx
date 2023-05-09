import { Link } from "react-router-dom";
import Button from '../../components/Button/Button'
import style from '../../assets/style/Pages/form.module.scss'
import RegistrationItem from '../../components/Form/RegistrationItem.tsx';


export const Form = () => {
 


  return (
      <div className={style.form}>
        <section className={style.form__container}>
        <h1 className={style.form__title}>
        Sign
          <span className={style.form__title, style.form__title_green }>
          Up
          </span>
        </h1>
        <form action="POST" className={style.form__registration}>
          <div className={style.form__list}>
            <RegistrationItem title="login" type="text" error={false}/>
          </div>
          <div className={style.form__list}>
            <RegistrationItem title="mobile number" type="tel" error={false}/>
          </div>
          <div className={style.form__list}>
            <RegistrationItem title="Email" type="email" error={false}/>
          </div>
          <div className={style.form__list}>
            <RegistrationItem title="password" type="password" error={false} />
          </div>
          <div className={style.login__list}>
            <RegistrationItem title="confirmpwd" type="password" error={false} />
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
};
