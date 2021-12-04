import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import SmallPin from './SmallPin';
import Update from './update';
import UpdateComponent from './update_component';
import FollowingComponent from './user_following';
import '../CSS/profile_page.css';
import Board from './Board';
import Spinner from './Spinner';

class ProfilePage extends Component {
	state = {
		boards: [],
		email: '',
		user_id: '',
		boardClicked: false,
		boardClickedPins: [],
		boardClickedName: '',
		followers: [],
		following: [],
		loading: false,
	};

	componentDidMount = async () => {
		this.state.user_id = this.props.match.params.id;

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/profile/${this.state.user_id}`
		);
		let data = await response.json();
		this.setState({...data});
	};

	getFollowers = async () => {
		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/profile/${this.state.user_id}/followers`
		);
		let data = await response.json();
		this.setState({followers: data.results});
		console.log(this.state.followers);
	};

	getFollowing = async () => {
		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/profile/${this.state.user_id}/followings`
		);
		let data = await response.json();
		this.setState({following: data.results});
		console.log(this.state.following);
	};

	showBoardPins = async (board_id, name) => {
		this.setState({
			boardClicked: true,
			loading: true,
			boardClickedName: name,
		});

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/board/${board_id}`
		);
		let data = await response.json();
		this.setState({boardClickedPins: data.savedPins}, () =>
			this.setState({loading: false})
		);
	};

	render() {
		// console.log(this.state.boards);
		return (
			<Fragment>
				<div className='d-flex flex-column align-items-center'>
					<div>
						<img
							className='rounded-circle mt-4'
							id='profile_img'
							style={{width: '120px', height: '120px'}}
							src={this.state.profile_picture}
							alt='your image'></img>
					</div>

					<div className='lead fs-2 mt-0 fw-bold '>{}</div>
					<div className='lead fs-6 mt-0 fw-normal '>
						{this.state.username}
					</div>

					<div className='d-flex'>
						<div className='dropdown mt-2 me-3'>
							<Link
								to=''
								className='link-dark text-decoration-none fw-bold'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'
								onClick={this.getFollowers}>
								Followers: {this.state.follower_count}
							</Link>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
								id='dd-nav-setting'
								style={{maxHeight: '250px'}}>
								<li>
									<h6 className='dropdown-header'>Followers</h6>
								</li>
								{this.state.follower_count > 0 ? (
									this.state.followers.map((follower) => {
										return <FollowingComponent {...follower} />;
									})
								) : (
									<p className='lead fs-6 text-center'>Ya3eni you have no followers</p>
								)}
							</ul>
						</div>
						<div className='dropdown mt-2 ms-3'>
							<Link
								to=''
								className='link-dark text-decoration-none fw-bold'
								type='button'
								id='dropdownMenuButton1'
								data-bs-toggle='dropdown'
								aria-expanded='false'
								onClick={this.getFollowing}>
								Following: {this.state.following_count}
							</Link>
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
								id='dd-nav-setting'
								style={{maxHeight: '250px'}}>
								<li>
									<h6 className='dropdown-header'>Following</h6>
								</li>
								{this.state.following_count > 0 ? (
									this.state.following.map((following) => {
										return <FollowingComponent {...following} />;
									})
								) : (
									<p className='lead fs-6 text-center'>You don't follow anyone</p>
								)}
							</ul>
						</div>
					</div>
					<div>
						<Link
							to={`/profile/${window.localStorage.getItem(
								'user_id'
							)}/edit`}
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
				<p className='lead fs-2 fw-normal text-center mt-5'>My Boards</p>
				<div className='d-flex flex-wrap justify-content-evenly mt-4'>
					{this.state.boards.length != 0 ? (
						this.state.boards.map((board) => {
							return (
								<Board
									board_id={board.id}
									name={board.name}
									{...board}
									showBoardPins={this.showBoardPins}
								/>
							);
						})
					) : (
						<div>
							<p className='lead'>No boards created yet.</p>
						</div>
					)}
				</div>
				{this.state.boardClickedPins.length != 0 && (
					<p className='lead fs-2 fw-normal text-center mt-5'>
						Pins in{' '}
						<span className='text-danger fw-bold'>
							{this.state.boardClickedName}
						</span>
					</p>
				)}
				<div className='d-flex flex-wrap justify-content-evenly mt-3'>
					{this.state.boardClickedPins.length != 0 &&
						(!this.state.loading ? (
							this.state.boardClickedPins.map((pin) => {
								return (
									<div>
										{/* <button>x</button> */}
									<SmallPin
										key={pin.id}
										title={pin.title}
										pinImage={pin.pin_picture}
										pin_id={pin.id}
									/>
									</div>

									
								);
							})
						) : (
							<Spinner />
						))}
				</div>
			</Fragment>
		);
	}
}

export default ProfilePage;
