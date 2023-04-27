import React from 'react';
import {  Link } from 'react-router-dom';
import { ButtonSubmit } from '../component/Item/Input/Input';
import '../style/style.scss';


const preventRefresh = (e) => {
	e.preventDefault();
};

export const Login = () => {
	return (
		<div className="wrapper signIn">
			<div className="illustration">
				<img src="https://source.unsplash.com/random" alt="illustration" />
			</div>
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your name" />
					</div>
					<div>
						<label htmlFor="e-mail">E-Mail</label>
						<input type="email" id="e-mail" placeholder="Enter you mail" />
					</div>
					<ButtonSubmit  onClick={preventRefresh} />
						
				</form>
				<p>
					Don't have an account ? <Link to="/"> Sign In </Link>
				</p>
			</div>
		</div>
	);
}
