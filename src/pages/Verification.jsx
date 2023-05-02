import React from 'react';
import { useForm } from "react-hook-form";


export const Verification = () => {
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
    <form
            action="POST"
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
    >

    <p>Please, enter your e-mail</p>
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
              type='submit'
              value='Submit'
              className='btn'
            />

     </form>
  );
}

