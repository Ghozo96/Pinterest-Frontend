import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import {} from 'react-router-dom';
import Register from './Components/JS/Register';
import Login from './Components/JS/Login';
import Pin from './Components/JS/Pin';
import NavBar from './Components/JS/navbar1';
import NavBarPP from './Components/JS/NavbarPP.js';
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
import Pagination from './Components/JS/Pagination';

class App extends Component {
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
		currentPage: 1,
		nextPage: null,
		prevPage: null,
		maxPageNum: null,

		myheader: new Headers(),
		my_boards:[],
	};

	receiveTokenAndRedirect =  (token, isLoggedIn, user_id) => {
		this.setState({
			token: token,
			isLoggedIn: isLoggedIn,
			user_id: user_id,
		});
		this.get_boards(token)
	};

	get_boards = async (token)=>{
		var requestOptions = {
			method: 'GET',
			headers: this.state.myheader,
		};

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/board/mine`,
			requestOptions
		);
		let data = await response.json();
		// window.localStorage.setItem('boards', data.res)
		this.setState({my_boards: data.results})
		console.log(data.results);
		console.log("===============")
		console.log(this.state.my_boards)		
	}

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
			
			this.state.myheader.append('Authorization', `Token ${loggedInUser.token}`);
			this.get_boards(loggedInUser.token)
		}

		//fetching pins
		this.setState({loading: true});
		var requestOptions = {
			method: 'GET',
			headers: this.state.myheader,
		};

		let response = await fetch(
			`${process.env.REACT_APP_HOST_IP}/pin/list`,
			requestOptions
		);
	
		let data = await response.json();
		this.setState({pinsData: data.results, nextPage: data.next}, () =>
			this.setState({loading: false})
		);

		//calculating maximum page number
		this.setState({maxPageNum: this.calculateMaxPageNum(data.count)});
	};

	fetchingNextOrPrevPins = async (buttonClicked) => {
		let response = null;
		let data = null;
		this.setState({loading: true});

		if (buttonClicked === 'Next' && this.state.nextPage != null) {
			response = await fetch(this.state.nextPage);
			this.setState({currentPage: this.state.currentPage + 1});
		} else if (buttonClicked === 'Previous' && this.state.prevPage != null) {
			response = await fetch(this.state.prevPage);
			this.setState({currentPage: this.state.currentPage - 1});
		}

		data = await response.json();
		this.setState(
			{pinsData: data.results, nextPage: data.next, prevPage: data.previous},
			() => {
				this.setState({loading: false});
			}
		);
	};

	calculateMaxPageNum = (pinsCount) => {
		let result = Math.trunc(pinsCount / 20);
		let remainder = pinsCount % 20;
		if (remainder != 0) result += 1;

		return result;
	};

	logout = () => {
		this.setState({
			token: '',
			user_id: 0,
			username: '',
			isLoggedIn: false,
		});
		window.localStorage.clear();
	};

	NavigateToHomepage = async () => {
		this.setState({
			loading: true,
			noResults: false,
			currentPage: 1,
			prevPage: null,
		});
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list`);
		let data = await response.json();
		this.setState({pinsData: data.results}, () =>
			this.setState({loading: false, nextPage: data.next})
		);
	};

	render() {
		let noResultsText = (
			<div className='text-center lead fs-3 mt-3'>
				No results found for {this.state.searchedParam}
			</div>
		);

		let num = 60;
		console.log(Math.trunc(num / 20));

		return (
			<Router>
				<div>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
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
							)}
						/>
						<Route
							exact
							path='/register'
							render={(props) => (
								<Fragment>
									{this.state.isRegistered ? (
										<Redirect to='/login' />
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
							)}
						/>
						<Route
							exact
							path='/login'
							render={(props) => (
								<Fragment>
									{this.state.isLoggedIn ? (
										<Redirect to='/pins' />
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
							)}
						/>
						<Route
							exact
							path='/profile/:id'
							render={(props) => (
								<Fragment>
									<NavBarPP
										{...props}
										logout={this.logout}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<ProfilePage {...props} />
								</Fragment>
							)}
						/>
						{/* <Route
							exact
							path='/profile'
							render={(props) => (
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<ProfilePage />
								</Fragment>
							)}
						/> */}
						<Route
							exact
							path='/profile/:id/edit'
							render={(props) => (
								<Fragment>
									<NavBarPP
										{...props}
										logout={this.logout}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<SettingPage username={this.state.username} />
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/pins'
							render={(props) => (
								<Fragment>
									<NavBar
										{...props}
										logout={this.logout}
										sendSearchParamUp={this.fetchSearchedPins}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									{this.state.loading ? (
										<Spinner />
									) : (
										<div>
											{this.state.noResults ? (
												noResultsText
											) : (
												<Pins pinsData={this.state.pinsData} my_boards={this.state.my_boards} />
											)}
										</div>
									)}
									<Pagination
										fetchingNextOrPrevPins={
											this.fetchingNextOrPrevPins
										}
										currentPage={this.state.currentPage}
										maxPageNum={this.state.maxPageNum}
									/>
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/pin/create'
							render={(props) => (
								<Fragment>
									<NavBar
										{...props}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<CreatePin {...props}/>
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/pin/:id'
							render={(props) => (
								<Fragment>
									<NavBar
										{...props}
										logout={this.logout}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<Pin {...props} my_boards={this.state.my_boards} />
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/board/create'
							render={(props) => (
								<Fragment>
									<NavBar
										{...props}
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<CreateBoard {...props}/>
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/board/edit'
							render={(props) => (
								<Fragment>
									<NavBar
										NavigateToHomepage={this.NavigateToHomepage}
									/>
									<EditBoard />
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/boardpage'
							render={(props) => (
								<Fragment>
									<NavBar />
									<BoardPage />
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/board'
							render={(props) => (
								<Fragment>
									<NavBar />
									<Board />
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/boards'
							render={(props) => (
								<Fragment>
									<NavBar />
									<Boards />
								</Fragment>
							)}
						/>
						<Route
							exact
							exact
							path='/spinner'
							render={(props) => (
								<Fragment>
									<NavBar />
									<Spinner />
								</Fragment>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
