import React from 'react';
import spinner from '../imgs/spinner.gif'

const Spinner = () => {
	return (
		<div>
			<img
				src={spinner}
				alt='Loading...'
				style={{ width: '200px', display: 'block', margin: 'auto' }}
				className='mt-5'
			/>
		</div>
	);
};

export default Spinner;
