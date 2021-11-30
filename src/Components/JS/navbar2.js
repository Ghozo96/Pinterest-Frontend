import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar2.css';

function NavBar2() {
	return (
		//
		<div className='my-0' id='bootstrap-overrides2'>
			<nav
				className='d-flex p-1  navbar-fixed-top justify-content-between'
				id='navbar2'>
				<div className='d-flex flex-nowrap'>
					<Link to='/pins' className='mt-1 ms-4 nav-item ' id='logo'>
						<i className='fab fa-pinterest fa-2x'></i>
					</Link>
					<span class='navbar-text mt-0 lead' id='logo-text'>
						Pinterest
					</span>
				</div>

				<div className='d-flex flex-nowrap'>
					<Link
						to='/login'
						className='mt-1 mx-2 nav-item nav-link rounded-pill nav-elem'
						id='login'>
						Log in
					</Link>
					<Link
						to='/register'
						className='mt-1 mx-2 nav-item nav-link rounded-pill nav-elem'
						id='signup'>
						Sign up
					</Link>
				</div>
			</nav>
		</div>
		//
	);
}

export default NavBar2;
