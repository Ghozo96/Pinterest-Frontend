import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import CreatePin from './CreatePin';

class AddButton extends React.Component {
	render() {
		return (
			<div>
				<div class='btn-group dropstart'>
					<button
						type='button'
						className='btn btn-lg btn-light fw-bold rounded-circle shadow'
						style={{
							position: 'fixed',
							top: '85%',
							left: '90%',
							zIndex: '100',
						}}
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						+
					</button>
					<ul className='dropdown-menu'>
                        <Link to='/pin/create' className='link'>
                            <li className='dropdown-item'>
                                Create Pin
                            </li>
						</Link>
                        <Link to='/board/create' className='link'>
                            <li className='dropdown-item'>
                                Create Board
                            </li>
						</Link>
					</ul>
				</div>
			</div>
		);
	}
}

export default AddButton;
