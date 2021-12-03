import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import BoardList from './BoardList';

class Board extends Component {
	render(){
		return (	
			<Fragment>
				<div className='card border-0'>
						<Link to ='/pin'>
							<div>
							
								<img
									className='card d-inline border-0'
									style={imgStyle}
									src={this.props.pinPic1}
									alt=''
								/>
								<img
									className='d-inline card border-0'
									style={imgStyle2}
									src={this.props.pinPic2}
									alt=''
								/>
								<img
									className='d-inline card border-0'
									style={imgStyle3}
									src={this.props.pinPic3}
									alt=''
								/>
							</div>
						</Link>
							  <div className='hoverPinOptions'>
							<BoardList />
							<button className='btn btn-danger m-2 rounded-pill saveButton'>
								Save
							</button>
						</div>
						<div className='card-body'>
							<h6 className='card-text lead text-center'>
								{this.props.name}
							</h6>
						</div>
					</div>
			</Fragment>
		);
	}
};

const imgStyle = {
   width: '9rem',
   height: '16rem',
   objectFit: 'cover',
   zIndex: '3',
   boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.356)',
}

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



export default Board;
