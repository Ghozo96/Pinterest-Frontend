import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/update_component.css';

class UpdateComponent extends Component {
	constructor() {
		super();
		this.state = {
			link_to: '',
			notification_msg: '',

			pin_title: '',
		};
	}
	componentDidMount = () => {
		if (this.props.type == 'follow') {
			this.setState({
				link_to: '/profile/' + this.props.notifier,
				notification_msg: ' followed you',
			});
		} else if (this.props.type == 'comment') {
			this.setState({
				link_to: '/pin/' + this.props.pin,
				notification_msg: ' commented on your pin',
			});
		} else if (this.props.type == 'like') {
			this.setState({
				link_to: '/pin/' + this.props.pin,
				notification_msg: ' liked your pin',
			});
		}
	};
	render() {
		return (
			<li id='bootstrap-overrides4' className='mx-2'>
				<Link class='dropdown-item' id='notif' to={this.state.link_to}>
					<div className='d-flex flex-nowrap '>
						<div className='align-self-center'>
							<img
								id='notif_img'
								src={
									process.env.REACT_APP_HOST_IP +
									this.props.notifier_pp
								}></img>
						</div>
						<div className='align-self-center ms-2 mt-3' id='notif-text'>
							<p className=' text-wrap text-start fs-6'>
								{this.props.notifier_username}{' '}
								{this.state.notification_msg}
								&nbsp;
								{this.props.type != 'follow'
									? this.props.pin_title
									: ''}
								{/* Hi I'm a notification to help you get the latest news */}
							</p>{' '}
						</div>
					</div>
				</Link>
			</li>
		);
	}
}

export default UpdateComponent;
