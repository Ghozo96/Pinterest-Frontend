import React, {Component} from 'react';
import '../CSS/CreateBoard.css';

class CreateBoard extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			description: '',

			submited: false,
			isFormEmpty: false,

			userid: window.localStorage.getItem('user_id'),
			username: window.localStorage.getItem('username'),
			token: window.localStorage.getItem('token'),

			myheader: new Headers(),
		};
	}

	getUrl = () => {
		return `${process.env.REACT_APP_HOST_IP}/board/create`;
	};
	componentDidMount = () => {
		this.state.myheader.append('Authorization', `Token ${this.state.token}`);
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({submited: false});

		if (this.isFormFieldEmpty(e)) {
			this.setState({isFormEmpty: true});
		} else {
			this.setState({isFormEmpty: false});

			var formdata = new FormData();
			formdata.append('name', e.target.name.value);
			formdata.append('description', e.target.description.value);

			var requestOptions = {
				method: 'POST',
				headers: this.state.myheader,
				body: formdata,
			};

			let response = await fetch(this.getUrl(), requestOptions);
			let data = await response.json();

			console.log(data);
			if (response.status == 400) {
				console.log('error');
			} else {
				this.setState({submited: true});
			}

			setTimeout(() => {
				this.props.history.push(
					`/profile/${window.localStorage.getItem('user_id')}`
				);
			}, 2000);
		}
	};

	isFormFieldEmpty = (e) => {
		console.log('form is empty');
		if (e.target.name.value === '' || e.target.description.value === '') {
			return true;
		} else {
			return false;
		}
	};

	render() {
		return (
			<div className='container mt-5'>
				<form
					className='createBoardContainer p-4'
					onSubmit={this.handleSubmit}>
					<h2 className='text-center m-4 mt-2'>Create Board</h2>
					{this.state.isFormEmpty && (
						<div className='lead fs-4 mb-2 text-danger text-center'>
							Please enter the missing fields!
						</div>
					)}
					<div className='my-3'>
						<label for='boardName ' className='mb-1 ms-1 '>
							Name
						</label>
						<input
							type='text'
							className='form-control rounded-pill'
							name='name'
							placeholder='Board Name'
						/>
					</div>
					<div className='my-3'>
						<label for='boardDescription' className='mb-1 ms-1 '>
							Description
						</label>
						<textarea
							type='text'
							className='form-control rounded-pill'
							name='description'
							placeholder='Description'
						/>
					</div>

					{/* <div className='form-check my-3'>
						<input
							className='form-check-input'
							type='checkbox'
							value=''
							id='flexCheckDefault'
						/>
						<label
							className='form-check-label fw-bold'
							for='flexCheckDefault'>
							Keep This Board Secret
						</label>
						<p className='text-muted'>
							So only you and collaborators can see it.
						</p>
					</div> */}
					{this.state.submited && (
						<div className='lead fs-5 mb-3 text-success text-center'>
							your Board has been created successfully
						</div>
					)}
					<div className='d-flex justify-content-end'>
						<button className='btn btn-danger rounded-pill' type='submit'>
							Create
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateBoard;
