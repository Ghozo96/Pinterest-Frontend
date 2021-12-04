import React, {Fragment, useState} from 'react';
import Spinner from './Spinner';


class SettingPage extends React.Component {

    constructor(){
        super();
        this.state={
			
			first_name:'',
			last_name:'',
			username:'',
			email:'',
			short_bio:'',
			website:"",
			gender:'',
			country:'',

			profile_picture:'',
			userid: window.localStorage.getItem('user_id'),
		
			loading:true,
			submited:false,
			emailError:false,
			websiteError:false,
			changedPP:false,
			myheader : new Headers(),	
			pro_picERROR :'',
			submitting_msg:'',
		
        }
		this.state.myheader.append("Authorization", `Token ${window.localStorage.getItem('token')}`);
    }

	getUrl=(id)=>{
		return `${process.env.REACT_APP_HOST_IP}/profile/${id}/edit`
	}

	componentDidMount = async () => {	
		var requestOptions = {
			method: 'GET',
			headers: this.state.myheader, };

		let response = await fetch(this.getUrl(this.state.userid),requestOptions);
		let data = await response.json();

		this.setState({...data}, () =>{ this.setState({loading: false});}	);		
	};

	sendingrequest=async (e)=>{
		var formdata = new FormData();
		formdata.append( 'first_name',   this.state.first_name);
		formdata.append ('last_name'  , this.state.last_name);
		formdata.append ('username'  , this.state.username);
		formdata.append ('short_bio'  , this.state.short_bio);
		formdata.append ('website'  , this.state.website);
		formdata.append('gender'  ,this.state.gender);
		if (this.state.changedPP){
			formdata.append('profile_picture', e.target.profile_picture.files[0] ,  e.target.profile_picture.files[0].name);
		}
		console.log(this.state.website)
		var requestOptions = {
		method: 'PATCH',
		headers: this.state.myheader,
		body:  formdata, };

		let response = await fetch(this.getUrl(this.state.userid), requestOptions);
			let data = await response.json();
			console.log(data)
			console.log(response)


		if (response.status == 400) {
			this.setState({submited:true,
				submitting_msg:'Opps, an error occurred, please try again later',})
		} else {
			window.localStorage.setItem('profile_picture',data.profile_picture)
			this.setState({submited:true,
			submitting_msg:'your profile has been edited successfully',})
		}

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({submited:false})


		if (this.EmailInValid(this.state.username) && this.state.username!= '' ){
			this.setState({emailError:true});
		}else if(this.WebsiteInValid(this.state.website) && this.state.website ){
			this.setState({websiteError:true});
			this.setState({emailError:false});
		}else {
			this.setState({websiteError:false});
			this.setState({gender:e.target.gender.value});
			this.sendingrequest(e);
		}	
	}

	ChangeHandler=(e)=>{
        this.setState({ [e.target.name]: e.target.value});
    }

	FirstNameInValid = (first_name) => {
		const regex = /^[a-zA-Z]*$/;
		return !regex.test(first_name);
	};

	LastNameInValid = (last_name) => {
		const regex = /^[a-zA-Z]*$/;
		return !regex.test(last_name);
	};

	EmailInValid = (email) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
		return !regex.test(email);
	};

	WebsiteInValid = (website) => {
		const regex =
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
		return !regex.test(website);
	};

	onImageChange = (e) => {
			this.setState({profile_picture : URL.createObjectURL(e.target.files[0]),});
			this.state.changedPP=true	
	  };

    render(){

	return (
		<Fragment>
			{this.state.loading ?
			 <Spinner /> :
			//  <div></div> 

			<div className=' text-center'>
				<div style={{margin: '0 20%'}}>
					<form
						name='form'
						onSubmit={this.handleSubmit}


						className='form d-flex flex-column justify-content-space-between  rounded-3 mt-2 py-3'>
						<div className='d-flex flex-column mb-4'>
							<div className='display-5 fw-bold '>Edit Profile Details</div>
						</div>
						<div className='d-flex flex-column mx-md-5 align-items-start '>
						
							<div className='d-flex align-self-center mb-2'>
								<img
									className='rounded-circle me-3'
									id='profile_img'
									src= {this.state.profile_picture ? this.state.profile_picture :'https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg'}
									alt='user image'></img>
								<label class='input-group-btn align-self-center'>
									<span class='btn btn-danger rounded-pill'>
										Change{' '}
										<input
											// accept='image/*'
											type='file'
											name='profile_picture'
											style={{display: 'none'}}
											onChange={this.onImageChange} 
										/>
									</span>
								</label>
							</div>
							{this.state.pro_picERROR==''? <div></div> : <div> error msg</div>}
							<label for='firstname' class='form-label ms-2 fw-light'>
								First Name
							</label>
							<input
								type='text'
								name='first_name'
								className='form-control rounded-pill  mb-3 shadow-sm '
								placeholder='First Name'
								value={this.state.first_name}
								onChange={this.ChangeHandler}		
							/>
							
							{this.FirstNameInValid(this.state.first_name) && (
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
								name='last_name'
								className='form-control rounded-pill  mb-3 shadow-sm '
								placeholder='Last Name'
								value={this.state.last_name}
								onChange={this.ChangeHandler}
							/>

							{this.LastNameInValid(this.state.last_name) && (
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
								name='username'
								className='form-control rounded-pill  mb-3 shadow-sm '
								placeholder='Email'
								value={this.state.username}
								onChange={this.ChangeHandler}
							/>
							{this.state.emailError && (
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
								name='short_bio'
								className='form-control rounded-pill  mb-3 shadow-sm '
								placeholder='Bio'
								value={this.state.short_bio}
								onChange={this.ChangeHandler}
							/>		

							<label for='website' class='form-label ms-2 fw-light'>
								Website
							</label>

							<input
								type='text'
								name='website'
								className='form-control rounded-pill  mb-3 shadow-sm '
								placeholder='Add a link to drive traffic to your site'
								value={this.state.website}
								onChange={this.ChangeHandler}
							/>
							{this.state.websiteError && (
								<div className='lead fs-6 mb-3 text-danger text-start'>
									Incorrect format, please enter something like this:
									www.example.com
								</div>
							)}
			
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
										value='M' 
										checked={this.state.gender === 'M'} 
										onChange={this.ChangeHandler}
									/>
									<label for='male'>Male</label>
								</div>

								<div>
									<input
										type='radio'
										name='gender'
										id='female'
										className={` ms-4 me-2 mb-3`}
										value='F' 
										checked={this.state.gender === 'F'} 
										onChange={this.ChangeHandler}
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

							{this.state.submited && (
								<div className='lead fs-6 mb-3 text-success text-center'>
									{this.state.submitting_msg}
								</div>
							)}

							<button
								type='submit'
								className='flex-fill btn btn-danger btn-lg rounded-pill px-4 mb-4 mt-4 shadow-sm align-self-center'>
								Save
							</button>
						</div>
						
					</form>

				</div>
			</div>}
		</Fragment>
		);
				}
}

export default SettingPage;