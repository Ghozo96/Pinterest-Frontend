import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import BoardList from './BoardList';

class Board extends Component {
	handleClick = () => {
		this.props.showBoardPins(this.props.board_id, this.props.name);
	};

	render() {
		let output = null;
		if (this.props.savedPins.length >= 3) {
			output = (
				<div onClick={this.handleClick} style={{cursor: 'pointer'}}>
					<img
						className='card d-inline border-0'
						style={imgStyle}
						src={this.props.savedPins[0].pin_picture}
						alt=''
					/>
					<img
						className='d-inline card border-0'
						style={imgStyle2}
						src={this.props.savedPins[1].pin_picture}
						alt=''
					/>
					<img
						className='d-inline card border-0'
						style={imgStyle3}
						src={this.props.savedPins[2].pin_picture}
						alt=''
					/>
				</div>
			);
		} else if (this.props.savedPins.length == 2) {
			output = (
				<div onClick={this.handleClick} style={{cursor: 'pointer'}}>
					<img
						className='card d-inline border-0'
						style={imgStyleIfTwoOnlyExist1}
						src={this.props.savedPins[0].pin_picture}
						alt=''
					/>
					<img
						className='d-inline card border-0'
						style={imgStyleIfTwoOnlyExist2}
						src={this.props.savedPins[1].pin_picture}
						alt=''
					/>
				</div>
			);
		} else if (this.props.savedPins.length == 1) {
			output = (
				<div onClick={this.handleClick} style={{cursor: 'pointer'}}>
					<img
						className='card d-inline border-0'
						style={imgStyleIfOneOnlyExists}
						src={this.props.savedPins[0].pin_picture}
						alt=''
					/>
				</div>
			);
		} else if (this.props.savedPins.length == 0) {
			output = (
				<div className='border d-flex align-items-center justify-content-center' style={{width: '19rem', height: '16rem'}}>
					{' '}
					No Pins Available
				</div>
			);
		}

		return (
			<Fragment>
				<div className='card border-0'>
					{output}
					<div className='card-body'>
						<h6 className='card-text lead text-center'>
							{this.props.name}
						</h6>
					</div>
				</div>
			</Fragment>
		);
	}
}

const imgStyle = {
	width: '9rem',
	height: '16rem',
	objectFit: 'cover',
	zIndex: '3',
	boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
};

const imgStyle2 = {
	width: '5rem',
	height: '16rem',
	objectFit: 'cover',
	zIndex: '2',
	boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
};

const imgStyle3 = {
	width: '5rem',
	height: '16rem',
	objectFit: 'cover',
	zIndex: '1',
	boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
};

const imgStyleIfOneOnlyExists = {
	width: '19rem',
	height: '16rem',
	objectFit: 'cover',
};

const imgStyleIfTwoOnlyExist1 = {
	width: '9.5rem',
	height: '16rem',
	objectFit: 'cover',
	zIndex: '2',
	boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
};

const imgStyleIfTwoOnlyExist2 = {
	width: '9.5rem',
	height: '16rem',
	objectFit: 'cover',
	zIndex: '1',
	boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
};

export default Board;
