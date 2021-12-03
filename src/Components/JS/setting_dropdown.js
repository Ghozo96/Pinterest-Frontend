import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/setting_dropdown.css';

class SettingDD extends Component {


	handleClick = () => {
		this.props.receiveLogoutClick();
	}

	render() {
		return (
			<div className='dropdown nav-item mt-1 ' id='bootstrap-overrides5'>
				<div className='dropdown nav-item mt-0'>
					<a
						className='nav-item nav-link nav-elem'
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						<i className='fas fa-chevron-down fa-lg'></i>
					</a>
					<ul
						className='dropdown-menu  overflow-auto'
						aria-labelledby='dropdownMenuButton1'
						id='dd-nav-setting'>
						<li>
							<h6 class='dropdown-header'>Currently in</h6>
						</li>
						<li className='mx-2'>
							<Link
								to='/profile'
								class='dropdown-item'
								id='setting-elem'>
								<div className='d-flex flex-nowrap '>
									<div className='align-self-center'>
										<img
											id='profile_img'
											src='https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg'></img>
									</div>
									<div className=' ms-2 ' id='setting-text'>
										<p className='text-capitalize text-wrap text-start fs-6 fw-bold mt-3'>
											{this.props.username}
										</p>
										<p className='text-wrap text-start fs-6 text-muted'>
											{this.props.username}
										</p>
									</div>
								</div>
							</Link>
						</li>

						<li>
							<h6 class='dropdown-header'>More options</h6>
						</li>

						<li className='mx-2 '>
							<Link
								to='/profile/edit'
								class='dropdown-item fw-bolder'
								id='setting-elem'>
								Edit Profile
							</Link>
						</li>
						<li className='mx-2 '>
							<Link
								to='/'
								class='dropdown-item fw-bolder'
								id='setting-elem'
								onClick={this.handleClick}>
								Log out
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default SettingDD;
