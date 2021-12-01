import React, {Component} from 'react';
import SmallPin from './SmallPin';
import AddButton from './AddButton';
import Spinner from './Spinner';

class Pins extends React.Component {
	state = {
		pinsData: [],
		loading: false,
	};

	componentDidMount = async () => {
		console.log('im in pins');
		this.setState({loading: true})

		let response = null;
		if(this.props.searchedParam != ''){
			response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list?search=${this.props.searchedParam}`);
		}
		else {
			response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/list`);
		}
		let data = await response.json();

		this.setState({pinsData: data.results}, () => this.setState({loading: false}));
	};

	render() {
		if (this.state.loading) {
			return <Spinner />;
		} else {
			return (
				<div>
					<AddButton />
					<div className=' d-flex flex-wrap justify-content-evenly'>
						{this.state.pinsData.map((pin) => {
							return (
								<SmallPin
									key={pin.id}
									title={pin.title}
									pinImage={pin.pin_picture}
								/>
							);
						})}
					</div>
				</div>
			);
		}
	}
}

export default Pins;
