import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import {Fragment} from 'react';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route
						path='/register'
						element={
							<Fragment>
								<NavBar2 />
								<Register />
							</Fragment>
						}
					/>
					<Route
						path='/login'
						element={
							<Fragment>
								<NavBar2 />
								<Login />
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
								<NavBar />
								<Pins />
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
								<CreatePin /><Route
						path='/boardpage'
						element={
							<Fragment>
								<NavBar />
								<BoardPage />
							</Fragment>
						}
					/>
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
				</Routes>
			</div>
		</Router>
	);
}

export default App;
