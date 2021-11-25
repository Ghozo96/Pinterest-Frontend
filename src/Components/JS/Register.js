import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [age, setAge] = useState(0);
	const [isEmpty, setIsEmpty] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passNotStrong, setPassNotStrong] = useState(false);
	const [passDontMatch, setPassDontMatch] = useState(false);
	const [isYoung, setIsYoung] = useState(false);
	const [ageNotInt, setAgeNotInt] = useState(false);

	let redBorder = 'border-danger';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormFieldEmpty(e)) {
			setIsEmpty(true);
		} else if (!isEmailValid(e.target.email.value)) {
			setEmailError(true);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setAgeNotInt(false);
			setIsYoung(false);
		} else if (!isPassStrong(e.target.password.value)) {
			setPassNotStrong(true);
			setEmailError(false);
			setPassDontMatch(false);
			setAgeNotInt(false);
			setIsYoung(false);
		} else if (e.target.password.value !== e.target.password2.value) {
			setPassDontMatch(true);
			setEmailError(false);
			setPassNotStrong(false);
			setAgeNotInt(false);
			setIsYoung(false);
		} else if (isNaN(parseInt(e.target.age.value))) {
			setAgeNotInt(true);
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setIsYoung(false);
		} else if (e.target.age.value <= 12) {
			setIsYoung(true);
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setAgeNotInt(false);
		} else {
			setIsEmpty(false);
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setAgeNotInt(false);
			setIsYoung(false);

			setEmail(e.target.email.value);
			setPassword(e.target.password.value);
			setPassword2(e.target.password2.value);
			setAge(e.target.age.value);
			clearForm(e);
		}
	};

	const clearForm = (e) => {
		e.target.email.value = '';
		e.target.password.value = '';
		e.target.password2.value = '';
		e.target.age.value = '';
	};

	const isFormFieldEmpty = (e) => {
		if (
			e.target.email.value === '' ||
			e.target.password.value === '' ||
			e.target.password2.value === '' ||
			e.target.age.value === ''
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

	const isPassStrong = (password) => {
		const regex =
			/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

		if (regex.test(password) && password.length >= 8) {
			return true;
		} else {
			return false;
		}
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
								Create your account
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
								className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
									passNotStrong && redBorder
								}`}
								placeholder='Create a password'
							/>
							{passNotStrong && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Enter at least 8 characters that contain at least 1
									capital letter, 1 small letter, 1 number
								</div>
							)}
							<input
								type='password'
								name='password2'
								className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
									passDontMatch && redBorder
								}`}
								placeholder='Confirm password'
							/>
							{passDontMatch && (
								<div className='lead fs-6 mb-3 text-danger align-self-start'>
									Passwords do not match! Try again.
								</div>
							)}
							<input
								type='text'
								name='age'
								className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
									(isYoung && redBorder) || (ageNotInt && redBorder)
								}`}
								placeholder='Age'
							/>
							{ageNotInt && (
								<div className='lead fs-6 mb-3 text-danger align-self-start'>
									Please enter a number
								</div>
							)}
							{isYoung && (
								<div className='lead fs-6 mb-3 text-danger align-self-start'>
									You must be older than 12 to register.
								</div>
							)}
						</div>
						<button
							type='submit'
							className='flex-fill btn btn-danger rounded-pill mx-4 mb-4 mt-2 shadow-sm'>
							Continue
						</button>
						<div className='lead fs-6 fw-normal'>
							Already registered?{' '}
							<a href='#' className='text-danger'>
								Login
							</a>
						</div>
					</form>
					<div className='mt-5'>
						<div>Email: {email}</div>
						<div>Password: {password}</div>
						<div>Confirmed Password: {password2}</div>
						<div>Age: {age}</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Register;
