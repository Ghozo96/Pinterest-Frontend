import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/SmallPin.css';
import BoardList from './BoardList';
class SmallPin extends Component {
	// goTo() {
	//     console.log("test")
	//     window.location = "http://www.google.com/"
	// }
	BoardSubmittionHandler=(msg)=>{
        this.setState({ board_msg: msg});
		console.log(msg)
	}

	render() {
		return (
			<div className='smallPinContainer d-flex flex-column flex-wrap m-3'>
				<div className='card border-0' style={{width: '22rem'}}>
					<Link to ={'/pin/'+ this.props.pin_id}>
						<img
							src={this.props.pinImage}
							className='card-img-top'
                            style={{height: '22rem', objectFit: 'cover'}}
							alt=''
						/>
					</Link>
                    <div className='hoverPinOptions'>
						<BoardList  my_boards={this.props.my_boards} pin_id={this.props.pin_id} />
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

				{/* <a href={this.state.link}>  this method add the url to the current url, https//localhost:3000/http://www.google.com/ onMouseOver={} */}
				{/* <div className='smallImgContainer p-1'>
					<Link to='/pin'>
						<img
							className='img-fluid smallImg'
							src={this.props.imgLink}
							alt=''></img>
					</Link>
					<div className='hoverPinOptions'>
						<BoardList />
						<button className='btn btn-danger m-2 rounded-pill saveButton'>
							Save
						</button>
					</div>
				</div>
				<div>
					<h6 onClick={() => this.goTo()} className='fw-bold'>
						{this.props.title}
					</h6>
				</div> */}
				{/* </a>  */}
			</div>
		);
	}
}

export default SmallPin;
