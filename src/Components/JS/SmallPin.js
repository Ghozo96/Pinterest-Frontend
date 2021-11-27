import React, {Component} from 'react';
import '../CSS/SmallPin.css'
import BoardList from './BoardList';
class SmallPin extends Component {

    goTo() {
        console.log("test")
        window.location = "http://www.google.com/"
    }

    render() { 
        return (
            <div   className='smallPinContainer d-flex flex-column flex-wrap m-3'>
            {/* <a href={this.state.link}>  this method add the url to the current url, https//localhost:3000/http://www.google.com/ onMouseOver={} */} 
                <div className='smallImgContainer p-1'> 
                    <img  onClick={() => this.goTo()} className='img-fluid smallImg' src={this.props.imgLink} alt=''></img>
                    <div className='hoverPinOptions'>
                        <BoardList />
                        <button className='btn btn-danger m-2 saveButton'>Save</button>
                    </div>

                </div>
                <div>
					<h6 onClick={() => this.goTo()} className='fw-bold'>{this.props.title}</h6>
				</div>
            {/* </a>  */}   
            </div>
          );
    }
}
 
export default SmallPin;