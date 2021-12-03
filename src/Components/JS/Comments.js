import React, {Component} from 'react';

class Comment extends React.Component {
	render() {
		return (
		
				<React.Fragment>
				<div className='d-flex align-items-center align-content-center'>
					<div>
						<img
							className='meImg  m-3'
							src={process.env.REACT_APP_HOST_IP +this.props.profilePic}
							alt=''></img>
					</div>
					<div
						className='container border border-danger rounded-pill d-flex align-items-center align-content-center p-3'
						style={{minHeight: '3rem'}}>
						<span>
							{this.props.content}
						</span>
						{/* put it in th left side and create a function to calculate time */}
						{/* <span className='text-muted fst-italic px-2'>20 mins</span> */}
						
					</div>
				</div>
				</React.Fragment>
			
		);
	}
}

export default Comment;
