import React, {Component} from 'react';
import '../CSS/CreatePin.css';
import BoardList from './BoardList';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
// import upload from '../imgs/upload.PNG'

class CreatePin extends Component {
	constructor() {
		super();
		this.state = {
			uploadPic: 'https://cdn.picpng.com/icon/upload-files-icon-66763.png',

			title: '',
			description: '',
			pin_picture: '',
			destination_link: '',

			changedPP: false,
			submited: false,
			websiteError: false,

			userid: window.localStorage.getItem('user_id'),
			username: window.localStorage.getItem('username'),
			profile_picture: window.localStorage.getItem('profile_picture'),
			token: window.localStorage.getItem('token'),

			myheader: new Headers(),
		};
	}

	componentDidMount = () => {
		this.state.myheader.append('Authorization', `Token ${this.state.token}`);
	};

	getUrl = (id) => {
		return `${process.env.REACT_APP_HOST_IP}/pin/create`;
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({submited: false});

		if (
			this.WebsiteInValid(e.target.destination_link.value) &&
			e.target.destination_link.value
		) {
			this.setState({websiteError: true});
		} else {
			this.setState({websiteError: false});
			var formdata = new FormData();
			formdata.append('title', e.target.title.value);
			formdata.append('description', e.target.description.value);
			if (this.state.changedPP) {
				formdata.append(
					'pin_picture',
					e.target.pin_picture.files[0],
					e.target.pin_picture.files[0].name
				);
			}

			var requestOptions = {
				method: 'POST',
				headers: this.state.myheader,
				body: formdata,
			};

			let response = await fetch(
				this.getUrl(this.state.userid),
				requestOptions
			);
			let data = await response.json();

			console.log(data);
            if (response.status == 400) {
                console.log('error' )  ; 
             } else {
			this.setState({submited: true});
        }
			// here we will redirect to the home page
		}
	};

	WebsiteInValid = (website) => {
		const regex =
			/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
		return !regex.test(website);
	};

	onImageChange = (e) => {
		try {
			this.setState({uploadPic: URL.createObjectURL(e.target.files[0])});
			this.state.changedPP = true;
		} catch {}
	};

	render() {
		return (
			<div className='container'>
				<form
					onSubmit={this.handleSubmit}
					className='pinContainerCreate my-5 text-start p-4'>
					<div className='imgContainerCreate d-flex align-items-center justify-content-center'>
						<label className='input-group-btn align-self-center'>
							<input
								type='file'
								name='pin_picture'
								id='name'
								style={{display: 'none'}}
								accept='image/*'
								onChange={this.onImageChange}
							/>
							<img className='uploadIcon' src={this.state.uploadPic} />
						</label>
					</div>

					<div>
						<input
							className='form-control titleInput fs-1 fw-bold mb-3 border-0 border-bottom'
							type='text'
							placeholder='Add Your Title'
							name='title'
						/>
					</div>

					<div className='owner d-flex align-items-center align-content-center justify-content-between '>
						<div className='d-flex align-items-center align-content-center m-2'>
							<div>
								<a href={this.state.ownerProfile}>
									{' '}
									{/* link to profile ?? */}
									<img
										className='ownerImg rounded-circle m-2'
										src={this.state.profile_picture} // get fromm local storage
										alt={this.state.username + ' picture'}></img>
								</a>
							</div>
							<div>
								<span>
									{/* link to profile ?? */}
									<a
										className='link fs-5 fw-bold'
										href={this.state.ownerProfile}>
										{this.state.username}
									</a>
								</span>
							</div>
						</div>
					</div>

					<div>
						<input
							className='form-control fs-6 mb-3 border-0 border-bottom'
							type='text'
							placeholder='Tell everyone what your Pin is about'
							name='description'
						/>
					</div>

					<div>
						<input
							class='form-control fs-6 mb-3 border-0 border-bottom'
							type='text'
							placeholder='Destination Link'
							name='destination_link'
						/>
						{this.state.websiteError && (
							<div className='lead fs-6 mb-3 text-danger text-start'>
								Incorrect format, please enter something like this:
								www.example.com
							</div>
						)}
					</div>
					{this.state.submited && (
						<div className='lead fs-6 mb-3 text-success text-center'>
							your Pin has been created successfully
						</div>
					)}
					<div className='optionsBar d-flex align-items-center align-content-center justify-content-center mb-3'>
						<div className='d-flex align-items-center align-content-center flex-wrap'>
							<BoardList />

							<div>
								<button
									type='submit'
									className='btn m-1 btn-danger rounded-pill'>
									{' '}
									Save{' '}
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CreatePin;
