import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import './signup.styles.scss';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleChange = (event) => {
		const {name, value} = event.target;

		this.setState({[name]: value})
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmPassword} = this.state;
		const { signUpStart } = this.props;

		if (password !== confirmPassword) {
			alert("Passwords dont't match");
			return;
		}

		signUpStart({ email, password, displayName});


	}	

	render() {
		const {displayName, email, password, confirmPassword} = this.state;

		return (
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput 
					  name='displayName' 
					  type='text' 
					  value={displayName} 
					  handleChange={this.handleChange}
					  label="Display Name"
					  required />					
					<FormInput 
					  name='email' 
					  type='email' 
					  value={email} 
					  handleChange={this.handleChange}
					  label="Email"
					  required />
					<FormInput
					  name='password' 
					  type='password' 
					  value={password} 
					  handleChange={this.handleChange}					  
					  label="Password"
					  required />
					<FormInput 
					  name='confirmPassword' 
					  type='password' 
					  value={confirmPassword} 
					  handleChange={this.handleChange}
					  label="Confirm Password"
					  required />					  
					<div className='button'>	
						<CustomButton type='submit'>Sign up</CustomButton>
					</div>						
				</form>				
			</div>
			)		
	}

}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});


export default connect(null, mapDispatchToProps)(SignUp);