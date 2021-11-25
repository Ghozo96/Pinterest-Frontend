import React, {Component} from 'react';
import '../CSS/Pin.css';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

class Pin extends Component {
	state = {
		imgLink:
			'https://i.pinimg.com/564x/c1/7c/61/c17c612afb745ea240ee602d7baae533.jpg',
		websiteLink: 'https://www.behance.net',
		websiteTitle: 'behance.net',
		imgTitle: 'Concrete planter',
		imgDesc:
			'#design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography #design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography',
		ownerProfile: 'https://www.pinterest.com/mohmosnaw',
		ownerProfileImg:
			'https://i.pinimg.com/564x/fa/48/a7/fa48a71531f8de2b40c6a10aad511691.jpg',
		ownerFollowers: '10 Followers',
		meImg: 'https://i.pinimg.com/564x/fa/48/a7/fa48a71531f8de2b40c6a10aad511691.jpg',
	};

	render() {
		return (
			<div className='container pinContainer d-flex flex-lg-row flex-column my-5'>
				<div className='imgContainer d-flex align-items-start justify-content-center'>
					<img src={this.state.imgLink} alt=''></img>
				</div>
				<div className='metaContainer d-flex flex-column p-3'>
					<div className='optionsBar d-flex align-items-center align-content-center justify-content-between'>
						<div className='d-flex align-items-center align-content-center flex-wrap'>
							<div>
								<button type='button' className='btn optionsLeft m-1'>
									<i class='fas fa-ellipsis-h'></i>
								</button>
							</div>
							<div>
								<button type='button' className='btn optionsLeft m-1'>
									<i class='fas fa-share-square'></i>
								</button>
							</div>
							<div>
								<button type='button' className='btn optionsLeft m-1'>
									<i class='fas fa-link'></i>
								</button>
							</div>
						</div>
						<div className='d-flex align-items-center align-content-center  flex-wrap'>
							<div class='dropdown'>
								<button
									class='btn btn-secondary dropdown-toggle'
									type='button'
									id='dropdownMenuButton1'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Board
								</button>
								<ul
									class='dropdown-menu'
									aria-labelledby='dropdownMenuButton1'>
									<li>
										<a class='dropdown-item' href='#'>
											Action
										</a>
									</li>
									<li>
										<a class='dropdown-item' href='#'>
											Another action
										</a>
									</li>
									<li>
										<a class='dropdown-item' href='#'>
											Something else here
										</a>
									</li>
								</ul>
							</div>
							<div>
								<button
									type='button'
									className='btn optionsRight m-1 btn-danger'>
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
										className='ownerImg m-2'
										src={this.state.ownerProfileImg}
										alt=''></img>
								</a>
							</div>
							<div>
								<span>
									<a className='link' href={this.state.ownerProfile}>
										Mohammad Mousad
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
									className='btn optionsRight m-1 btn-danger'>
									Follow
								</button>
							</div>
						</div>
					</div>
					<div className='commentsContainer d-flex flex-column  align-content-start'>
						{' '}
						{/*align-items-start*/}
						<div>
							{' '}
							<h3> Comments </h3>{' '}
						</div>
						<div className='addComment d-flex align-items-center align-content-center'>
							<div>
								<img className='meImg m-3' src={this.state.meImg} alt=''></img>
							</div>
							<div className='flex-grow-1'>
								<input
									type='text'
									class='form-control'
									placeholder='Add Comment'
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Pin;
