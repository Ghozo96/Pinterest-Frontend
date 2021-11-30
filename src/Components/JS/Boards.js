import React, {Fragment} from 'react';
import Board from './Board';

const Boards = () => {
	return (
		<Fragment>
			<div className='d-flex flex-wrap justify-content-evenly mt-3'>
				<Board />
            <Board />
            <Board />
            <Board />
            <Board />
            <Board />
            <Board />
            <Board />
			</div>
		</Fragment>
	);
};

export default Boards;
