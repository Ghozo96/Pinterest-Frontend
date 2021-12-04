import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/user_following.css';

class FollowingComponent extends Component {
	render() {
		const {url, username, profile_picture} = this.props;

		return (
			<li id='bootstrap-overrides4' className='mx-2'>
                {/* <Link to='/profile/17'> */}
				<div className='d-flex flex-nowrap '>
					<div className='align-self-center'>
						<img id='notif_img' src={profile_picture} />
					</div>
					<div className='align-self-center ms-2 mt-3' id='notif-text'>
						<p className='text-wrap text-start fs-6'>{username}</p>
					</div>
				</div>
                {/* </Link> */}
			</li>
		);
	}
}

export default FollowingComponent;
