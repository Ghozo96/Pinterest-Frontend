import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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

function App() {
	return (
		<Router>
			<div>
				{/* ======= Home Page for Unregistered ======= */}
				{/* <NavBar2 /> <Register />  */}
				
				{/* ======= Home Page for Registered but not logged in ======= */}
				{/* <NavBar2 /> <Login />*/}
				
				{/* ======= Home Page for logged in ======= */}
				{/* <NavBar /> <Pins /> */}

				{/* ======= Profile Page ======= */}
				{/* <NavBar /> <ProfilePage /> */}

				{/* ======= Settings Page ======= */}
				{/* <NavBar /> <SettingPage /> */}

				{/* ======= Create Board ======= */}
				{/* <NavBar /> <CreateBoard /> */}

				{/* ======= Edit Board ======= */}
				{/* <NavBar /> <EditBoard /> */}

				{/* ======= Create Pin ======= */}
				{/* <NavBar /> <CreatePin /> */}

				{/* ======= Specific Pin ======= */}
				{/* <NavBar /> <Pin />  */}

											
				
				
				
			</div>
		</Router>
	);
}

export default App;
