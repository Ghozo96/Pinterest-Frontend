import React, {Component} from 'react';
import SmallPin from './SmallPin';
import AddButton from './AddButton';

class Pins extends React.Component {
	state = {
		tempArr: [
			{
				image: 'https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg',
				title: 'Image 1',
			},
			{
				image: 'https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg',
				title: 'Image 2',
			},
			{
				image: 'https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg',
				title: 'Image 3',
			},
			{
				image: 'https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg',
				title: 'Image 4',
			},
			{
				image: 'https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg',
				title: 'Image 5',
			},
			{
				image: 'https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg',
				title: 'Image 6',
			},
			{
				image: 'https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg',
				title: 'Image 7',
			},
            {
				image: 'https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg',
				title: 'Image 1',
			},
			{
				image: 'https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg',
				title: 'Image 2',
			},
			{
				image: 'https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg',
				title: 'Image 3',
			},
			{
				image: 'https://i.pinimg.com/564x/a9/69/b4/a969b4155e1d02f89de39b93f099b8a5.jpg',
				title: 'Image 4',
			},
			{
				image: 'https://i.pinimg.com/564x/61/6c/ac/616cac908773314061acbd1d1ecb83db.jpg',
				title: 'Image 5',
			},
			{
				image: 'https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg',
				title: 'Image 6',
			},
			{
				image: 'https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg',
				title: 'Image 7',
			},
		],
	};

	render() {

        const { tempArr } = this.state;

		return (
			<div>
				<AddButton />
				<div className=' d-flex flex-wrap justify-content-evenly'>
                    {tempArr.map((pin) => {
                        return <SmallPin image={pin.image} title={pin.title} />
                    })}
				</div>
			</div>
		);
	}
}

export default Pins;
