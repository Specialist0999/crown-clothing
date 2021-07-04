import React from 'react';
import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-and-signup.styles.scss';

const SignInAndSignUpPage = () => {
	return (
		<div className='sign-in-and-sign-up'>
		<Signin />
		<SignUp />
		</div>
		)
}

export default SignInAndSignUpPage;