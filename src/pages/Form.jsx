import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Title } from '../component/Item/Title/Title';
import { Input } from '../component/Item/Input/Input';
import { Link } from 'react-router-dom';
import '../style/style.scss';

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [phoneValue, setPhoneValue] = useState('');

    const onSubmit = (data) => {
        for (const dataKey in data) {
            localStorage.setItem(dataKey, JSON.stringify(data[dataKey]))
        }
    };

    
    // first input in the form
//    const input = document.getElementsByTagName("input")[0];

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

        let result = '+';

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

        setPhoneValue(result)
    }

    return (
        <section>
            <div className="register">
                <div className="col-1">

                    <Title />

                    <form action="POST" id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)} >

                        <input type="text" {...register("username", {
                            required: 'Username name is required'
                        })} placeholder='username' />
                        {errors.username?.type === 'required' && <p role="alert">Username name is required</p>}


                        <input type="telNo" {...register("mobile", {
                            required: "Mobile number is required.",
                            minLength: {
                                value: 11,
                                message: "This input must exceed 10 characters"
                            },
                        } )} placeholder='mobile number' onChange={onChangeNumber} value={phoneValue}/>
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "minLength" && "Min Length 11 characters"}

                        

                        <input type="text" {...register("password", {
                            required: "Password name is required"
                        })} placeholder='password' />
                        {errors.password?.type === 'required' && <p role="alert">Password name is required</p>}

                        <input type="text" {...register("confirmPassword", {
                            required: "Confirm password name is required"
                        })} placeholder='confirm password' />
                        {errors.confirmPassword?.type === 'required' && <p role="alert">Confirm password name is required</p>}
                        
                        
                        <Input text='Submit' type='submit'/>
                        
                        <p> Have an account ? <Link to="/login"> Login </Link></p>
                    </form>

                </div>
            </div>
        </section>
        )
    }

