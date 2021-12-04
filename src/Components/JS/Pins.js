import React, {Component} from 'react';
import SmallPin from './SmallPin';
import AddButton from './AddButton';
import Spinner from './Spinner';

class Pins extends React.Component {
	// state = {
	// 	pinsData: [],
	// 	loading: false,
	// };

	// shouldComponentUpdate = (nextProps) => {
	// 	if(this.props.searchedParam != nextProps.searchedParam) return true;
	// 	else return false;
	// }

	// componentDidUpdate = async (prevProps) => {
	// 	this.setState({loading: true})

	// 	if(this.props.searchedParam != prevProps.searchedParam){
	// 		this.response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list?search=${this.props.searchedParam}`);
	// 	}
	// 	else {
	// 		this.response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list`);
	// 	}
	// 	this.data = await this.response.json();
	// 	this.setState({pinsData: this.data.results}, () => this.setState({loading: false}));
	// };

	render() {
		return (
			<div>
				<AddButton />
				<div className=' d-flex flex-wrap justify-content-evenly'>
					{this.props.pinsData.map((pin) => {
						return (
							<SmallPin
								key={pin.id}
								title={pin.title}
								pinImage={pin.pin_picture}
								pin_id={pin.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Pins;
