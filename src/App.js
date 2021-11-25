import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './Components/JS/Register';
import Login from './Components/JS/Login';
import Pin from './Components/JS/Pin';
import NavBar from './Components/JS/Navbar';

function App() {
	return (
		<Router>
			<div className='text-center'>
				<NavBar />
				<Register />
				<Login />
				<Pin />
			</div>
		</Router>
	);
}

export default App;
