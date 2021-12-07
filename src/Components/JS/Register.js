import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

class Register extends Component {
	state = {
		email: '',
		password: '',
		password2: '',
		age: 0,
		isEmpty: false,
		emailError: false,
		passNotStrong: false,
		passDontMatch: false,
		isYoung: false,
		ageNotInt: false,
		isRegistered: false,
	};

	redBorder = 'border-danger';
	flag = false;

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(process.env.REACT_APP_HOST_IP);

		if (this.isFormFieldEmpty(e)) {
			this.setState({isEmpty: true});
		} else if (!this.isEmailValid(e.target.email.value)) {
			this.setState({
				emailError: true,
				passNotStrong: false,
				passDontMatch: false,
				isYoung: false,
				ageNotInt: false,
			});
		} else if (!this.isPassStrong(e.target.password.value)) {
			this.setState({
				emailError: false,
				passNotStrong: true,
				passDontMatch: false,
				isYoung: false,
				ageNotInt: false,
			});
		} else if (e.target.password.value !== e.target.password2.value) {
			this.setState({
				emailError: false,
				passNotStrong: false,
				passDontMatch: true,
				isYoung: false,
				ageNotInt: false,
			});
		} else if (isNaN(parseInt(e.target.age.value))) {
			this.setState({
				emailError: false,
				passNotStrong: false,
				passDontMatch: false,
				isYoung: false,
				ageNotInt: true,
			});
		} else if (e.target.age.value <= 12) {
			this.setState({
				emailError: false,
				passNotStrong: false,
				passDontMatch: false,
				isYoung: true,
				ageNotInt: false,
			});
		} else {
			console.log('Im here');
			this.setState({
				isEmpty: false,
				emailError: false,
				passNotStrong: false,
				passDontMatch: false,
				isYoung: false,
				ageNotInt: false,
			});

			this.setState(
				{
					email: e.target.email.value,
					password: e.target.password.value,
					password2: e.target.password2.value,
					age: e.target.age.value,
				},
				() => {
					this.postFormData(this.state.email, this.state.password);
				}
			);

			this.clearForm(e);
		}
	};

	postFormData = async (email, password) => {
		console.log(email);
		console.log(password);
		console.log('-----');
		const obj = {
			username: email,
			password: password,
			password_confirm: password
		};
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(obj),
		};

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/register`,
			requestOptions
		);
		
		this.setState({isRegistered: true}, () => {
			this.props.redirectToLoginAfterRegister(this.state.isRegistered)
		})
	};

	clearForm = (e) => {
		e.target.email.value = '';
		e.target.password.value = '';
		e.target.password2.value = '';
		e.target.age.value = '';
	};

	isFormFieldEmpty = (e) => {
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

	isEmailValid = (email) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
		return regex.test(email);
	};

	isPassStrong = (password) => {
		const regex =
			/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

		if (regex.test(password) && password.length >= 8) {
			return true;
		} else {
			return false;
		}
	};

	render() {
		return (
			<Fragment>
				<div>
					<div style={{maxWidth: '500px'}} className='container-fluid text-center'>
						<form
							name='form'
							onSubmit={this.handleSubmit}
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
							<div className='d-flex flex-column mx-5 align-items-center'>
								<div className='lead fs-5 fw-normal mb-2'>
									Create your account
								</div>
								{this.state.isEmpty && (
									<div className='lead fs-6 mb-2 text-warning'>
										Please enter the missing fields!
									</div>
								)}
								<input
									type='text'
									name='email'
									className={`form-control rounded-3 mx-4 my-3 shadow-sm ${
										this.state.emailError && this.redBorder
									}`}
									placeholder='Email'
								/>
								{this.state.emailError && (
									<div className='lead fs-6 mb-3 text-danger text-start'>
										Incorrect format, please enter something like
										this: someone@example.com
									</div>
								)}
								<input
									type='password'
									name='password'
									className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
										this.state.passNotStrong && this.redBorder
									}`}
									placeholder='Create a password'
								/>
								{this.state.passNotStrong && (
									<div className='lead fs-6 mb-3 text-danger text-start'>
										Enter at least 8 characters that contain at least
										1 capital letter, 1 small letter, 1 number
									</div>
								)}
								<input
									type='password'
									name='password2'
									className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
										this.state.passDontMatch && this.redBorder
									}`}
									placeholder='Confirm password'
								/>
								{this.state.passDontMatch && (
									<div className='lead fs-6 mb-3 text-danger align-self-start'>
										Passwords do not match! Try again.
									</div>
								)}
								<input
									type='text'
									name='age'
									className={`form-control rounded-3 mx-4 mb-3 shadow-sm ${
										(this.state.isYoung && this.redBorder) ||
										(this.state.ageNotInt && this.redBorder)
									}`}
									placeholder='Age'
								/>
								{this.state.ageNotInt && (
									<div className='lead fs-6 mb-3 text-danger align-self-start'>
										Please enter a number
									</div>
								)}
								{this.state.isYoung && (
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
						{/* <div className='mt-5'>
							<div>Email: {this.state.email}</div>
							<div>Password: {this.state.password}</div>
							<div>Confirmed Password: {this.state.password2}</div>
							<div>Age: {this.state.age}</div>
						</div> */}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Register;
