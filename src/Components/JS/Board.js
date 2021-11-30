import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import BoardList from './BoardList';

const Board = () => {
	return (
		<Fragment>
         <div className='card border-0' style={{width: '22rem'}}>
					<Link to ='/pin'>
						<div>
                     <img
                        className='card d-inline border-0'
                        style={imgStyle}
                        src='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg'
                        alt=''
                     />
                     <img
                        className='d-inline card border-0'
                        style={imgStyle2}
                        src='https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg'
                        alt=''
                     />
                     <img
                        className='d-inline card border-0'
                        style={imgStyle3}
                        src='https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg'
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
							asdadad
						</h6>
					</div>
				</div>
		</Fragment>
	);
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
