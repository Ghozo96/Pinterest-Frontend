import React, {Fragment, Component} from 'react';
import {Redirect} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';

class Login extends Component {
	state = {
		email: '',
		password: '',
		isEmpty: false,
		emailError: false,
		token: '',
		wrongCredentials: false,
		isLoggedIn: false
	};

	redBorder = 'border-danger';

	handleSubmit = (e) => {
		e.preventDefault();

		if (this.isFormFieldEmpty(e)) {
			this.setState({isEmpty: true});
		} else if (!this.isEmailValid(e.target.email.value)) {
			this.setState({emailError: true});
		} else {
			this.setState({
				isEmpty: false,
				emailError: false,
			});

			this.setState(
				{
					email: e.target.email.value,
					password: e.target.password.value,
				},
				() => {
					this.postFormData(this.state.email, this.state.password, e);
				}
			);
		}
	};

	postFormData = async (email, password, e) => {
		const obj = {
			username: email,
			password: password,
		};
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(obj),
		};

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/login`,
			requestOptions
		);
		let data = await response.json();
		console.log(response.status);
		if (response.status == 400) {
			this.setState({wrongCredentials: true});
		} else if (response.status == 200) {
			this.setState(
				{
					token: data.token,
					wrongCredentials: false,
					isLoggedIn: true
				},
				() => {
					this.props.sendTokenUpAndRedirect(this.state.token, this.state.isLoggedIn)
				}
			);
			this.clearForm(e);
		}
	};

	clearForm = (e) => {
		e.target.email.value = '';
		e.target.password.value = '';
	};

	isFormFieldEmpty = (e) => {
		if (e.target.email.value === '' || e.target.password.value === '') {
			return true;
		} else {
			return false;
		}
	};

	isEmailValid = (email) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
		return regex.test(email);
	};

	renderElement = () => {
		if (!this.state.wrongCredentials) {
			return (
				<div className='mt-5'>
					<div>Email: {this.state.email}</div>
					<div>Password: {this.state.password}</div>
					<div>Token: {this.state.token}</div>
				</div>
			);
		}
	};

	render() {
		return (
			<Fragment>
				<div className='container text-center'>
					<div style={{margin: '0 30%'}}>
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
							<div className='d-flex flex-column mx-md-5 align-items-center'>
								<div className='lead fs-5 fw-normal mb-2'>
									Enter your credentials to login
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
									className='form-control rounded-3 mx-4 mb-3 shadow-sm'
									placeholder='Password'
								/>
								{this.state.wrongCredentials && (
									<div className='lead fs-6 mb-3 text-danger text-start'>
										Wrong username or password, try again!
									</div>
								)}
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
						{this.renderElement()}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Login;
