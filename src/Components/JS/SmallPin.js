import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/SmallPin.css';
import BoardList from './BoardList';
class SmallPin extends Component {
	state={
		pin_saved:this.props.pin_saved,

		userid: window.localStorage.getItem('user_id'),
		username: window.localStorage.getItem('username'),
		profile_picture: window.localStorage.getItem('profile_picture'),
		token: window.localStorage.getItem('token'),

		myheader: new Headers(),
	}
	componentDidMount=()=>{	
	// console.log( 'Authorization', `Token ${ window.localStorage.getItem('token')}` )
	this.state.myheader.append('Authorization', `Token ${ window.localStorage.getItem('token')}`);

	}

	BoardSubmittionHandler = (msg) => {
		this.setState({board_msg: msg});
		console.log(msg);
	};

	savePin = async () => {

		var requestOptions = {
			method: 'PATCH',
			headers: this.state.myheader,
			body: {},
		};
		// console.log(requestOptions,'h')
		let savecase = this.state.pin_saved ? 'unsave' : 'save';
		console.log(savecase);

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/pin/${this.props.pin_id}/${savecase}`,
			requestOptions
		);
		let data = await response.json();
		console.log(response.status)
		if (response.status == 400) {
			this.setState({wrongCredentials: true});
		} else if(response.status == 201){
			this.setState({pin_saved: !this.state.pin_saved});
		}
		console.log(data);
	};

	render() {
		return (
			<div className='smallPinContainer d-flex flex-column flex-wrap m-3'>
				<div className='card border-0' style={{width: '22rem'}}>
					<Link to={'/pin/' + this.props.pin_id}>
						<img
							src={this.props.pinImage}
							className='card-img-top'
							style={{height: '22rem', objectFit: 'cover'}}
							alt=''
						/>
					</Link>
					<div className='hoverPinOptions'>
						<BoardList
							my_boards={this.props.my_boards}
							pin_id={this.props.pin_id}
						/>
						<button className='btn btn-danger m-2 rounded-pill saveButton'
								onClick={this.savePin}>
							{this.state.pin_saved ? 'Unsave' : 'Save'}
						</button>
					</div>
					<div className='card-body'>
						<h6 className='card-text lead text-center'>
							{this.props.title}
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default SmallPin;
