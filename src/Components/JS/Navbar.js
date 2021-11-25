import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

class NavBar extends Component {
	render() {
		return (
			<div className='my-0'>
				<nav className='d-flex navbar navbar-light bg-light '>
					<Link to='#' className='mt-0 ms-4 nav-item ' id='logo'>
						<i className='fab fa-pinterest-p'></i>
					</Link>

					<Link
						to='#'
						className='nav-item nav-link  me-1'
						style={{fontWeight: 'bold'}}>
						Home
					</Link>

					<div className='ms-0 me-2 flex-grow-1'>
						<form className='input-group '>
							<input
								type='text'
								className='form-control'
								placeholder='Search'></input>
							<button type='button' className='btn btn-outline-danger'>
								<i className='fas fa-search'></i>
							</button>
						</form>
					</div>

					<Link to='#' className='mt-0 mx-2 nav-item'>
						<i className='far fa-bell'></i>
					</Link>
					<Link to='#' className='mt-0 mx-2 nav-item'>
						<i className='far fa-comment-dots'></i>
					</Link>

					<div class='dropdown nav-item  '>
						<a
							href='#'
							class='nav-item nav-link dropdown-toggle'
							data-bs-toggle='dropdown'>
							<i class='far fa-user-circle'></i>
						</a>
						<div class='dropdown-menu'>
							<a href='#' class='dropdown-item'>
								Inbox
							</a>
							<a href='#' class='dropdown-item'>
								Sent
							</a>
							<a href='#' class='dropdown-item'>
								Drafts
							</a>
						</div>
					</div>
				</nav>
			</div>
			//
		);
	}
}

export default NavBar;
