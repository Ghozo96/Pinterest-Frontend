import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import {} from 'react-router-dom';
import Register from './Components/JS/Register';
import Login from './Components/JS/Login';
import Pin from './Components/JS/Pin';
import NavBar from './Components/JS/navbar1';
import Pins from './Components/JS/Pins';
import CreatePin from './Components/JS/CreatePin';
import CreateBoard from './Components/JS/CreateBoard';
import EditBoard from './Components/JS/EditBoard';
import AddButton from './Components/JS/AddButton';
import NavBar2 from './Components/JS/navbar2';
import ProfilePage from './Components/JS/profile_page';
import SettingPage from './Components/JS/setting_page';
import BoardPage from './Components/JS/board_page';
import Board from './Components/JS/Board';
import Boards from './Components/JS/Boards';
import {Component, Fragment} from 'react';
import Spinner from './Components/JS/Spinner';

class App2 extends Component {
	state = {
		token: '',
		user_id: 0,
		username: '',
		isLoggedIn: false,
		isRegistered: false,
		pinsData: [],
		noResults: false,
		loading: false,
		searchedParam: '',
	};

	receiveTokenAndRedirect = (token, isLoggedIn, user_id) => {
		this.setState({
			token: token,
			isLoggedIn: isLoggedIn,
			user_id: user_id,
		});
		// console.log(token);
		// console.log(user_id);
	};

	redirectToLoginAfterRegister = (isRegistered) => {
		this.setState({
			isRegistered: isRegistered,
		});
	};

	fetchSearchedPins = async (param) => {
		this.setState({searchedParam: param}, async () => {
			this.setState({loading: true});
			let response = await fetch(
				`${process.env.REACT_APP_HOST_IP}/pin/list?search=${this.state.searchedParam}`
			);
			let data = await response.json();
			// console.log(data)
			if (data.count == 0) {
				this.setState({noResults: true, loading: false});
			} else {
				this.setState({noResults: false});
				this.setState({pinsData: data.results}, () =>
					this.setState({loading: false})
				);
			}
		});
	};

	componentDidMount = async () => {
		//keeping the user logged in
		const loggedInUser = {
			token: localStorage.getItem('token'),
			id: localStorage.getItem('user_id'),
			username: localStorage.getItem('username'),
		};
		if (loggedInUser) {
			this.setState({
				token: loggedInUser.token,
				user_id: loggedInUser.id,
				username: loggedInUser.username,
			});
		}

		//fetching pins
		this.setState({loading: true});
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list`);
		let data = await response.json();
		this.setState({pinsData: data.results}, () =>
			this.setState({loading: false})
		);
	};

	logout = () => {
		this.setState({
			token: '',
			user_id: 0,
			username: '',
			isLoggedIn: false
		});
		window.localStorage.clear();
	};

	NavigateToHomepage = async () => {
		this.setState({loading: true, noResults: false});
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list`);
		let data = await response.json();
		this.setState({pinsData: data.results}, () =>
			this.setState({loading: false})
		)
	};


	render() {
		let noResultsText = (
			<div className='text-center lead fs-3 mt-3'>
				No results found for {this.state.searchedParam}
			</div>
		);

		return (
			<Router>
				<div>
					<Routes>
						<Route
							path='/'
							element={
								<Fragment>
									<NavBar2 />
									{this.state.loading ? (
										<Spinner />
									) : (
										<div>
											{this.state.noResults ? (
												noResultsText
											) : (
												<Pins pinsData={this.state.pinsData} />
											)}
										</div>
									)}
								</Fragment>
							}
						/>
						<Route
							path='/register'
							element={
								<Fragment>
									{this.state.isRegistered ? (
										<Navigate to='/login' />
									) : (
										<div>
											<NavBar2 />
											<Register
												redirectToLoginAfterRegister={
													this.redirectToLoginAfterRegister
												}
											/>
										</div>
									)}
								</Fragment>
							}
						/>
						<Route
							path='/login'
							element={
								<Fragment>
									{this.state.isLoggedIn ? (
										<Navigate to='/pins' />
									) : (
										<div>
											<NavBar2 />
											<Login
												sendTokenUpAndRedirect={
													this.receiveTokenAndRedirect
												}
											/>
										</div>
									)}
								</Fragment>
							}
						/>
						<Route
							path='/profile'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<ProfilePage user_id={this.state.user_id} username={this.state.username}/>
								</Fragment>
							}
						/>
						<Route
							path='/profile/edit'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<SettingPage username={this.state.username}/>
								</Fragment>
							}
						/>
						<Route
							path='/pins'
							element={
								<Fragment>
									<NavBar
										logout={this.logout}
										sendSearchParamUp={this.fetchSearchedPins}
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									{this.state.loading ? (
										<Spinner />
									) : (
										<div>
											{this.state.noResults ? (
												noResultsText
											) : (
												<Pins pinsData={this.state.pinsData} />
											)}
										</div>
									)}
								</Fragment>
							}
						/>
						<Route
							path='/pin/details/:id'
							
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<Pin />
								</Fragment>
							}
						/>
						<Route
							path='/pin'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<Pin />
								</Fragment>
							}
						/>
						<Route
							path='/pin/create'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<CreatePin />
								</Fragment>
							}
						/>
						<Route
							path='/board/create'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<CreateBoard />
								</Fragment>
							}
						/>
						<Route
							path='/board/edit'
							element={
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
										user_id={this.state.user_id}
										username={this.state.username}
									/>
									<EditBoard />
								</Fragment>
							}
						/>
						<Route
							path='/boardpage'
							element={
								<Fragment>
									<NavBar />
									<BoardPage />
								</Fragment>
							}
						/>
						<Route
							path='/board'
							element={
								<Fragment>
									<NavBar />
									<Board />
								</Fragment>
							}
						/>
						<Route
							path='/boards'
							element={
								<Fragment>
									<NavBar />
									<Boards />
								</Fragment>
							}
						/>
						<Route
							path='/spinner'
							element={
								<Fragment>
									<NavBar />
									<Spinner />
								</Fragment>
							}
						/>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
