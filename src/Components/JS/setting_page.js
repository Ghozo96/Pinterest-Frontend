import React, {Fragment, useState} from 'react';

const SettingPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [bio, setBio] = useState('');
	const [website, setWebsite] = useState('');
	const [username, setUserName] = useState('');
	const [gender, setGender] = useState('');
	// const [photo, setPhoto] = useState('');
	// const [country, setCountry] = useState('');
	const [isEmpty, setIsEmpty] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passNotStrong, setPassNotStrong] = useState(false);
	const [passDontMatch, setPassDontMatch] = useState(false);
	const [firstnameError, setFirstNameError] = useState(false);
	const [lastnameError, setLastNameError] = useState(false);
	const [websiteError, setWebsiteError] = useState(false);
	// const [usernameError, setUserNameError] = useState(false);

	let redBorder = 'border-danger';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isFormFieldEmpty(e)) {
			setIsEmpty(true);
		} else if (!isEmailValid(e.target.email.value)) {
			setEmailError(true);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setFirstNameError(false);
			setLastNameError(false);
			setWebsiteError(false);
			// setUserNameError(false);
		} else if (!isPassStrong(e.target.password.value)) {
			setPassNotStrong(true);
			setEmailError(false);
			setPassDontMatch(false);
			setFirstNameError(false);
			setLastNameError(false);
			setWebsiteError(false);
			// setUserNameError(false);
		} else if (e.target.password.value !== e.target.password2.value) {
			setPassDontMatch(true);
			setEmailError(false);
			setPassNotStrong(false);
			setFirstNameError(false);
			setLastNameError(false);
			setWebsiteError(false);
			// setUserNameError(false);
		} else if (!isFirstNameValid(e.target.firstname.value)) {
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setFirstNameError(true);
			setLastNameError(false);
			setWebsiteError(false);
			// setUserNameError(false);
		} else if (!isLastNameValid(e.target.lastname.value)) {
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setFirstNameError(false);
			setLastNameError(true);
			setWebsiteError(false);
			// setUserNameError(false);
		} else if (!isWebsiteValid(e.target.website.value)) {
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setFirstNameError(false);
			setLastNameError(false);
			setWebsiteError(true);
			// setUserNameError(false);
		// } else if (!isUserNameValid(e.target.username.value)) {
		// 	setEmailError(false);
		// 	setPassNotStrong(false);
		// 	setPassDontMatch(false);
		// 	setFirstNameError(false);
		// 	setLastNameError(false);
		// 	setWebsiteError(false);
		// 	// setUserNameError(true);
		} else {
			setIsEmpty(false);
			setEmailError(false);
			setPassNotStrong(false);
			setPassDontMatch(false);
			setFirstNameError(false);
			setLastNameError(false);
			setWebsiteError(false);
			// setUserNameError(false);

			setEmail(e.target.email.value);
			setPassword(e.target.password.value);
			setPassword2(e.target.password2.value);
			setFirstName(e.target.firstname.value);
			setLastName(e.target.lastname.value);
			setBio(e.target.bio.value);
			setWebsite(e.target.website.value);
			// setUserName(e.target.username.value);
			setGender(e.target.gender.value);
			// setCountry(e.target.country.value);
			clearForm(e);
		}
	};

	const clearForm = (e) => {
		e.target.email.value = '';
		e.target.password.value = '';
		e.target.password2.value = '';
		e.target.firstname.value = '';
		e.target.lastname.value = '';
		e.target.bio.value = '';
		e.target.website.value = '';
		// e.target.username.value = '';
		e.target.gender.value = '';
		// e.target.country.value = '';
	};

	const isFormFieldEmpty = (e) => {
		if (
			e.target.email.value === '' ||
			e.target.password.value === '' ||
			e.target.password2.value === '' ||
			e.target.firstname.value === '' ||
			e.target.lastname.value === '' ||
			e.target.website.value === '' ||
			// e.target.username.value === '' ||
			e.target.gender.value === ''
			// ||
			// e.target.country.value === ''
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

	const isFirstNameValid = (firstname) => {
		const regex = /^[a-zA-Z]*$/;
		return regex.test(firstname);
	};

	const isLastNameValid = (firstname) => {
		const regex = /^[a-zA-Z]*$/;
		return regex.test(firstname);
	};

	const isWebsiteValid = (website) => {
		const regex =
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
		return regex.test(website);
	};

	// const isUserNameValid = (username) => {
	// 	const regex = /^[a-zA-Z0-9]+$/;
	// 	return regex.test(username);
	// };

	// const ChangePhoto = (e) => {
	//     setPhoto(e.target.files.value)
	//     console.log(photo)
	//     if (file) {
	//         profile_img.src = URL.createObjectURL(file)
	//     }
	//   }

	// const selectDrop = () =>{ document.querySelector('#countries');
	// // const selectDrop = document.getElementById('countries');

	// fetch('http://restcountries.eu/rest/v2/all').then(res => {
	//   return res.json();
	// }).then(data => {
	//   let output = "";
	//   data.forEach(country => {
	//     output += `

	//     <option value="${country.name}">${country.name}</option>`;
	//     console.log(country.name);
	//   })

	//   selectDrop.innerHTML = output})};

	return (
		<Fragment>
			<div className=' text-center'>
				<div style={{margin: '0 20%'}}>
					<form
						name='form'
						onSubmit={handleSubmit}
						className='form d-flex flex-column justify-content-space-between  rounded-3 mt-2 py-3'>
						<div className='d-flex flex-column mb-4'>
							<div className='display-5 fw-bold '>Edit Profile Details</div>
						</div>
						<div className='d-flex flex-column mx-md-5 align-items-start '>
							{isEmpty && (
								<div className='lead fs-5 mb-3 text-danger align-self-center'>
									Please enter the missing fields!
								</div>
							)}
							<div className='d-flex align-self-center mb-2'>
								<img
									className='rounded-circle me-3'
									id='profile_img'
									src='https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg'
									alt='your image'></img>
								<label class='input-group-btn align-self-center'>
									<span class='btn btn-danger rounded-pill'>
										Change{' '}
										<input
											accept='image/*'
											type='file'
											id='imgInp'
											style={{display: 'none'}}
										/>
									</span>
								</label>
							</div>
							<label for='firstname' class='form-label ms-2 fw-light'>
								First Name
							</label>
							<input
								type='text'
								name='firstname'
								className={`form-control rounded-pill  mb-3 shadow-sm ${
									firstnameError && redBorder
								}`}
								placeholder='First Name'
							/>
							{firstnameError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Incorrect format, please enter a Name without using
									numbers of special characters
								</div>
							)}
							<label for='lastname' class='form-label ms-2 fw-light'>
								Last Name
							</label>
							<input
								type='text'
								name='lastname'
								className={`form-control rounded-pill  mb-3 shadow-sm ${
									lastnameError && redBorder
								}`}
								placeholder='Last Name'
							/>

							{lastnameError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Incorrect format, please enter a Name without using
									numbers of special characters
								</div>
							)}

							<label for='email' class='form-label ms-2 fw-light'>
								Email Address
							</label>
							<input
								type='text'
								name='email'
								className={`form-control rounded-pill  mb-3 shadow-sm ${
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
							<label for='bio' class='form-label ms-2 fw-light'>
								Short Bio
							</label>
							<input
								type='text'
								name='bio'
								className={`form-control rounded-pill  mb-3 shadow-sm 
								}`}
								placeholder='Describe Yourself'
							/>

							<label for='password' class='form-label ms-2 fw-light'>
								Password
							</label>
							<input
								type='password'
								name='password'
								className={`form-control rounded-pill  mb-3 shadow-sm ${
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
							<label for='password2' class='form-label ms-2 fw-light'>
								Confirm password
							</label>

							<input
								type='password'
								name='password2'
								className={`form-control rounded-pill mb-3 shadow-sm ${
									passDontMatch && redBorder
								}`}
								placeholder='Confirm password'
							/>
							{passDontMatch && (
								<div className='lead fs-6 mb-3 text-danger align-self-start'>
									Passwords do not match! Try again.
								</div>
							)}

							<label for='website' class='form-label ms-2 fw-light'>
								Website
							</label>

							<input
								type='text'
								name='website'
								className={`form-control rounded-pill mb-3 shadow-sm ${
									websiteError && redBorder
								}`}
								placeholder='Add a link to drive traffic to your site'
							/>
							{websiteError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Incorrect format, please enter something like this:
									www.example.com
								</div>
							)}
							{/* <label for='username' class='form-label ms-2 fw-light'>
								Username
							</label>

							<input
								type='text'
								name='username'
								className={`form-control rounded-pill mb-3 shadow-sm ${
									usernameError && redBorder
								}`}
								placeholder='Enter your User Name'
							/>
							{usernameError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Only characters and numbers are allowed
								</div>
							)} */}
							<label for='gender' class='form-label ms-2 fw-light'>
								Gender
							</label>
							<div className='d-flex align-self-start'>
								<div>
									<input
										type='radio'
										name='gender'
										id='male'
										className={`   me-2 mb-3 `}
										value='male'
									/>
									<label for='male'>Male</label>
								</div>

								<div>
									<input
										type='radio'
										name='gender'
										id='female'
										className={` ms-4 me-2 mb-3`}
										value='female'
									/>
									<label for='female'>Female</label>
								</div>
							</div>
							<label for='countries' class='form-label ms-2 fw-light'>
								Country/Region
							</label>
							<select
								id='countries'
								name='countries'
								className='form-select rounded-pill'
								aria-label='Default select example'>
								<option>Egypt</option> <option>selection 2</option>
							</select>

							<button
								type='submit'
								className='flex-fill btn btn-danger btn-lg rounded-pill px-4 mb-4 mt-4 shadow-sm align-self-center'>
								Save
							</button>
						</div>
					</form>
					{/* <div className='mt-5'>
                        <div>First Name : {firstname}</div>
                        <div>Last Name : {lastname}</div>
						<div>Email: {email}</div>
                        <div>Bio: {bio}</div>
                        <div>Website: {website}</div>
                        <div>User Name: {username}</div>
                        <div>Gender: {gender}</div>
						<div>Password: {password}</div>
						<div>Confirmed Password: {password2}</div>
					</div> */}
				</div>
			</div>
		</Fragment>
	);
};

export default SettingPage;
