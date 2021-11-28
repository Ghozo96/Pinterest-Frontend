import React, {Component} from 'react';
import '../CSS/Pin.css';
import BoardList from './BoardList';
import OptionsList  from './OptionsList';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import Comment from './Comments';


class Pin extends Component {
	state = {
		imgLink:
			'https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg',
		websiteLink: 'https://www.behance.net',
		websiteTitle: 'behance.net',
		imgTitle: 'Img 2',
		imgDesc:
			'#design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography #design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography',
		ownerProfile: 'https://www.pinterest.com/mohmosnaw',
		ownerProfileImg:
			'https://i.pinimg.com/564x/fa/48/a7/fa48a71531f8de2b40c6a10aad511691.jpg',
		ownerFollowers: ' Followers',
		meImg: 'https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg',
	};

	render() {
		return (
			<div className='container pinContainer d-flex flex-lg-row flex-column my-5 text-start'>
				<div className='imgContainer d-flex align-items-start justify-content-center'>
					<img src={this.state.imgLink} alt=''></img>
				</div>
				<div className='metaContainer d-flex flex-column p-3'>
					<div className='optionsBar d-flex align-items-center align-content-center justify-content-between'>
						<div className='d-flex align-items-center align-content-center flex-wrap'>
							<OptionsList />
							<div>
								<button type='button' className='btn optionsLeft m-1 rounded-pill'>
									<i class='fas fa-link'></i>
								</button>
							</div>
						</div>
						<div className='d-flex align-items-center align-content-center  flex-wrap'>
							<BoardList />
							<div>
								<button
									type='button'
									className='btn optionsRight m-1 btn-danger rounded-pill'>
									Save
								</button>
							</div>
						</div>
					</div>
					<div>
						<a className='link' href={this.state.websiteLink}>
							{this.state.websiteTitle}
						</a>
					</div>
					<div>
						<h2>{this.state.imgTitle}</h2>
					</div>
					<div>
						<p>{this.state.imgDesc}</p>
					</div>
					<div className='owner d-flex align-items-center align-content-center justify-content-between'>
						<div className='d-flex align-items-center align-content-center'>
							<div>
								<a href={this.state.ownerProfile}>
									<img
										className='ownerImg rounded-circle m-2'
										src={this.state.ownerProfileImg}
										alt=''></img>
								</a>
							</div>
							<div>
								<span>
									<a className='link' href={this.state.ownerProfile}>
										User Name
									</a>
								</span>
								<br />
								<span>{this.state.ownerFollowers}</span>
							</div>
						</div>
						<div className='d-flex align-items-center align-content-center'>
							<div>
								<button
									type='button'
									className='btn optionsRight m-1 btn-danger rounded-pill'>
									Follow
								</button>
							</div>
						</div>
					</div>

					<Comment />
					
				</div>
			</div>
		);
	}
}
export default Pin;
