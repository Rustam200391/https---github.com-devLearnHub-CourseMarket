import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import '../style/style.scss';

export const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    for (const dataKey in data) {
      localStorage.setItem(dataKey, JSON.stringify(data[dataKey]));
    }
  };

  return (
    <div className="wrapper signIn">
      
      <div className="form">
        <div className="heading">LOGIN</div>
        <form action="POST" onSubmit={handleSubmit(onSubmit)}>
          <div>
            {/* <label htmlFor="name">Name</label> */}
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
          </div>
          <div>
            {/* <label htmlFor="e-mail">E-Mail</label> */}
            <input
              type="email"
              {...register("mail", {
                required: "Email Address is required",
              })}
              placeholder="email address"
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}
          </div>

          <input type="submit" value="Submit" className="btn"  />
        </form>
        <p>
          Don't have an account ? <Link to="/"> Sign In </Link>
        </p>
      </div>
    </div>
  );
};
