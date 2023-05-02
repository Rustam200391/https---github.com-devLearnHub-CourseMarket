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
        <div className="heading">Login</div>
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
            type="submit" 
            value="Submit" 
            className="btn"  
           />

        </form>
          <p>
            Don't have an account ? <Link to="/"> Sign In </Link>
          </p>
          <p>
            Forgot password ? <Link to="/verify" variant="body2"> Click Here </Link>
          </p>
        </div>
      </div>
          
  );
};
