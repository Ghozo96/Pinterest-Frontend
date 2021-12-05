import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/SmallPin.css';
import BoardList from './BoardList';
class SmallPin extends Component {
	render() {
		return (
			<div className='smallPinContainer d-flex flex-column flex-wrap m-3'>
				<div className='card border-0' style={{width: '22rem'}}>
					<Link to={'/pin/' + this.props.pin_id}>
						<img
							src={this.props.pinImage}
							className='card-img-top'
							style={{height: '22rem', objectFit: 'cover'}}
							alt=''
						/>
					</Link>
					<div className='hoverPinOptions'>
						<BoardList />
						<button className='btn btn-danger m-2 rounded-pill saveButton'>
							Save
						</button>
					</div>
					<div className='card-body'>
						<h6 className='card-text lead text-center'>
							{this.props.title}
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default SmallPin;
