import React, {Fragment, useState} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/boardpage.css';
import SmallPin from './SmallPin';

const BoardPage = () => {
	const [n_pins, setN_pins] = useState(4);

	return (
		<Fragment>
			<div className='d-flex flex-column align-items-center'>
				<div className='d-flex '>
					<div className='lead fs-2 mt-3 fw-bold '>Board Name</div>
					<div className='dropdown mt-4'>
						<Link
							to=''
							className='rounded-circle'
							type='button'
							id='dropdownMenuButton1'
							data-bs-toggle='dropdown'
							aria-expanded='false'>
							<i
								className='fas fa-ellipsis-h fa-2x ms-2 my-1'
								id='board-btn1'></i>
						</Link>
						<ul
							className='dropdown-menu '
							aria-labelledby='dropdownMenuButton1'
							id='dd-nav-setting'>
							<li>
								<h6 className='dropdown-header ms-2'>Board options</h6>
							</li>

							<li className='mx-2 '>
								<Link
									class='dropdown-item  fw-bolder'
									id='setting-elem'
									to='#'>
									Edit Board
								</Link>
							</li>
							<li className='mx-2 '>
								<Link
									class='dropdown-item fw-bolder'
									id='setting-elem'
									to='#'>
									Delete Board
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div>
					<img
						className='rounded-circle my-3'
						id='profile_img'
						src='https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg'
						alt='your image'></img>
				</div>

				{n_pins != 1 && (
					<div className='lead fs-4 mt-3 fw-bolder '>{n_pins} Pins</div>
				)}
				{n_pins == 1 && (
					<div className='lead fs-4 mt-3 fw-bolder '>1 Pin</div>
				)}

				<div className='d-flex flex-wrap'>
					<div
						style={{width: '25%', minWidth: '300px', flex: '1'}}
						className='mx-2'>
						<SmallPin
							imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg'
							title='Photo Example'
						/>
					</div>
					<div
						style={{width: '25%', minWidth: '300px', flex: '1'}}
						className='mx-2'>
						<SmallPin
							imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg'
							title='Photo Example'
						/>
					</div>
					<div
						style={{width: '25%', minWidth: '300px', flex: '1'}}
						className='mx-2'>
						<SmallPin
							imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg'
							title='Photo Example'
						/>
					</div>
					<div
						style={{width: '25%', minWidth: '300px', flex: '1'}}
						className='mx-2'>
						<SmallPin
							imgLink='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg'
							title='Photo Example'
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default BoardPage;
