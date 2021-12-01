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

class App extends Component {
	state = {
		token: '',
		isLoggedIn: false,
		isRegistered: false,
		searchedParam: ''
	};

	receiveTokenAndRedirect = (token, isLoggedIn) => {
		this.setState({
			token: token,
			isLoggedIn: isLoggedIn,
		});
		console.log(token);
	};

	redirectToLoginAfterRegister = (isRegistered) => {
		this.setState({
			isRegistered: isRegistered
		});
	}

	sendSearchParamDownToPins = (param) => {
		console.log(param)
		this.setState({searchedParam: param})
		console.log(this.setState)
	}

	render() {
		return (
			<Router>
				<div>
					<Routes>
						<Route
							path='/register'
							element={
								<Fragment>
									{this.state.isRegistered ? (
										<Navigate to='/login' />
									) : (
										<div>
											<NavBar2 />
											<Register redirectToLoginAfterRegister={this.redirectToLoginAfterRegister}/>
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
									<NavBar />
									<ProfilePage />
								</Fragment>
							}
						/>
						<Route
							path='/profile/edit'
							element={
								<Fragment>
									<NavBar />
									<SettingPage />
								</Fragment>
							}
						/>
						<Route
							path='/pins'
							element={
								<Fragment>
									<NavBar sendSearchParamUp={this.sendSearchParamDownToPins}/>
									<Pins searchedParam={this.state.searchedParam}/>
								</Fragment>
							}
						/>
						<Route
							path='/pin'
							element={
								<Fragment>
									<NavBar />
									<Pin />
								</Fragment>
							}
						/>
						<Route
							path='/pin/create'
							element={
								<Fragment>
									<NavBar />
									<CreatePin />
								</Fragment>
							}
						/>
						<Route
							path='/board/create'
							element={
								<Fragment>
									<NavBar />
									<CreateBoard />
								</Fragment>
							}
						/>
						<Route
							path='/board/edit'
							element={
								<Fragment>
									<NavBar />
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
