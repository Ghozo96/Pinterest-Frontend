import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import SmallPin from './SmallPin';
import Update from './update';
import UpdateComponent from './update_component';
import FollowingComponent from './user_following';
import '../CSS/profile_page.css';
import Board from './Board';

class ProfilePage extends Component {
	state = {
		boards: [],
		email: ''
	};

	componentDidMount = async () => {
		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/profile/${this.props.user_id}`
		);
		let data = await response.json();
		this.setState({boards: data.boards, email: data.username});
		console.log("component did mount", this.state.boards)
	};


	render() {
		console.log('parent render', this.state.boards)
		return (
			<Fragment>
				<div className='d-flex flex-column align-items-center'>
					<div>
						<img
							className='rounded-circle mt-4'
							id='profile_img'
							style={{width: '120px', height: '120px'}}
							src='https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg'
							alt='your image'></img>
					</div>

					<div className='lead fs-2 mt-0 fw-bold '>
						
					</div>
					<div className='lead fs-6 mt-0 fw-normal '>
						{window.localStorage.getItem("username")}
					</div>

					<div className='dropdown mt-2'>
						<Link
							to=''
							className='link-dark text-decoration-none fw-bold'
							type='button'
							id='dropdownMenuButton1'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							Following
						</Link>
						<ul
							className='dropdown-menu '
							aria-labelledby='dropdownMenuButton1'
							id='dd-nav-setting'
							style={{maxHeight: '250px'}}>
							<li>
								<h6 className='dropdown-header ms-2'>Following</h6>
							</li>

							<FollowingComponent />
							<FollowingComponent />
							<FollowingComponent />
							<FollowingComponent />
							<FollowingComponent />
							<FollowingComponent />
							<FollowingComponent />
						</ul>
					</div>

					<div>
						<Link
							to='/profile/edit'
							class='btn btn-lg rounded-pill mt-2'
							id='edit-profile'>
							Edit Profile
						</Link>
					</div>
					<div className='dropdown mt-4 align-self-end me-4'>
						<Link
							to=''
							className='rounded-circle'
							type='button'
							id='dropdownMenuButton1'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<i
								className='fas fa-plus fa-2x ms-2 my-1'
								id='board-btn1'></i>
						</Link>
						<ul
							className='dropdown-menu '
							aria-labelledby='dropdownMenuButton1'
							id='dd-nav-setting'>
							<li>
								<h6 className='dropdown-header ms-2'>Create</h6>
							</li>

							<li className='mx-2 '>
								<Link
									to='/pin/create'
									class='dropdown-item lead fw-bolder'
									id='setting-elem'>
									Pin
								</Link>
							</li>
							<li className='mx-2 '>
								<Link
									to='/board/create'
									class='dropdown-item lead fw-bolder'
									id='setting-elem'>
									Board
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='d-flex flex-wrap justify-content-evenly mt-5'>
					{this.state.boards.map((board) => {
						return <Board name={board.name} pinPic1={board.savedPins[0].pin_picture} pinPic2={board.savedPins[1].pin_picture} pinPic3={board.savedPins[2].pin_picture}/>
					})}
				</div>
			</Fragment>
		);
	}
}

export default ProfilePage;
