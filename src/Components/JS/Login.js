import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

const Login = () => {

   const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
   const [isEmpty, setIsEmpty] = useState(false);
   const [emailError, setEmailError] = useState(false);

   let redBorder = 'border-danger';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormFieldEmpty(e)) {
			setIsEmpty(true);
		} else if (!isEmailValid(e.target.email.value)) {
			setEmailError(true);
       } else {
			setIsEmpty(false);
			setEmailError(false);

			setEmail(e.target.email.value);
			setPassword(e.target.password.value);
			clearForm(e);
		}
	};

   const clearForm = (e) => {
		e.target.email.value = '';
		e.target.password.value = '';
	};

	const isFormFieldEmpty = (e) => {
		if (
			e.target.email.value === '' ||
			e.target.password.value === ''
		) {
			return true;
		} else {
			return false;
		}
	};

	const isEmailValid = (email) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
		return regex.test(email);
	};

	return (
		<Fragment>
			<div className='container text-center'>
				<div style={{margin: '0 30%'}}>
					<form
						name='form'
                  onSubmit={handleSubmit}
						className='form d-flex flex-column justify-content-space-between border border-2 rounded-3 shadow-sm mt-5 py-3'>
						<div className='d-flex flex-column mb-5'>
							<span className='fs-1 text-danger'>
								<FontAwesomeIcon icon={faPinterest} />
							</span>
							<div className='lead fs-2 fw-bold '>
								Welcome to Pinterest
							</div>
							<div className='lead fs-6 fw-normal'>
								Find new ideas to try
							</div>
						</div>
						<div className='d-flex flex-column mx-md-5 align-items-center'>
							<div className='lead fs-5 fw-normal mb-2'>
								Enter your credentials to login
							</div>
							{isEmpty && (
								<div className='lead fs-6 mb-2 text-warning'>
									Please enter the missing fields!
								</div>
							)}
							<input
								type='text'
								name='email'
								className={`form-control rounded-3 mx-4 my-3 shadow-sm ${
									emailError && redBorder
								}`}
								placeholder='Email'
							/>
							{emailError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Incorrect format, please enter something like this:
									someone@example.com
								</div>
							)}
							<input
								type='password'
								name='password'
								className='form-control rounded-3 mx-4 mb-3 shadow-sm'
								placeholder='Password'
							/>
						</div>
						<button
							type='submit'
							className='flex-fill btn btn-danger rounded-pill mx-4 mb-4 mt-2 shadow-sm'>
							Login
						</button>
						<div className='lead fs-6 fw-normal'>
							Don't have an account?{' '}
							<a href='#' className='text-danger'>
								Sign Up
							</a>
						</div>
					</form>
					<div className='mt-5'>
						<div>Email: {email}</div>
						<div>Password: {password}</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
