import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';
import SettingDD from './setting_dropdown';
import Update from './update';
import Spinner from './Spinner';

class NavBar extends Component {

	handleSubmit = async (e) => {
		e.preventDefault();
		let param = e.target.search.value;
		this.props.sendSearchParamUp(param);
	};

	render() {
		return (
			<div className='my-0' id='bootstrap-overrides'>
				<nav className='d-flex p-1  navbar-fixed-top' id='navbar1'>
					<Link
						to='/pins'
						className='mt-1 ms-4 nav-item nav-link  nav-elem'
						id='logo'>
						<i className='fab fa-pinterest fa-2x'></i>
					</Link>

					<Link
						to='/pins'
						className='nav-item nav-link  nav-elem me-1 mt-0 lead'
						id='nav-elem1'>
						Home
					</Link>

					<div className='ms-0 me-2 mt-1 flex-grow-1 '>
						<form
							name='form'
							onSubmit={this.handleSubmit}
							className='input-group flex-nowrap'>
							<input
								type='text'
								name='search'
								className='form-control'
								placeholder='Search'
								id='search-bar'
							/>
							<button
								type='submit'
								className='btn nav-elem ms-1'
								id='search-btn'>
								<i className='fas fa-search fa-lg'></i>
							</button>
						</form>
					</div>

					<Update />

					<Link
						to='/profile'
						className='mt-1 mx-2 nav-item nav-link nav-elem'
						id='nav-elem4'>
						<i className='far fa-user-circle fa-lg'></i>
					</Link>

					<SettingDD />
				</nav>
			</div>
		);
	}
}

export default NavBar;
