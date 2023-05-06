import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../assets/style/Pages/reset_password.scss';
import RegistrationItem from '../../components/Form/RegistrationItem';

export const ResetPassword = () => {
  return (
    <div className={style.reset}>
    <section>
      <h1>Forgot Password</h1>
    </section>
    <RegistrationItem/>Email Adress
    </div>
  )
}

