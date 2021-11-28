import React, {Component} from 'react';
import '../CSS/CreatePin.css'
import BoardList from './BoardList';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
// import upload from '../imgs/upload.PNG'


class CreatePin extends Component {
	state = {
		imgLink:
			'https://i.pinimg.com/564x/c1/7c/61/c17c612afb745ea240ee602d7baae533.jpg',
		websiteLink: 'https://www.behance.net',
		websiteTitle: 'behance.net',
		imgTitle: 'Concrete planter',
		imgDesc:
			'#design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography #design #architecture #furniture #designlove #interiordesign #interiors #architecturephotography',
		ownerProfile: 'https://www.pinterest.com/mohmosnaw',
		ownerProfileImg:
			'https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg',
		ownerFollowers: 'Followers',
		meImg: 'https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg',
	};

	render() {
		return (
			<div className='container'>
			    <form action="" className='pinContainerCreate my-5 text-start p-4'> 
                    <div className='imgContainerCreate d-flex align-items-center justify-content-center'>                        
                        <label for="image">
                            <input 
                                type="file" 
                                name="image"
                                id="image"
                                style={{display:'none'}} 
                                accept="image/*"
                            />
                            {/*  <img className='uploadIcon' src='https://cdn.picpng.com/icon/upload-files-icon-66763.png'/> */}
                             <i className="fas fa-upload uploadIcon "/> 
                        </label>                   
                    </div>
                    <div>
                            <input 
                                class="form-control titleInput fs-1 fw-bold mb-3 border-0 border-bottom" 
                                type="text" 
                                placeholder="Add Your Title" 
                            />
                        </div>
                        <div className='owner d-flex align-items-center align-content-center justify-content-between '>
                            <div className='d-flex align-items-center align-content-center m-2'>
                                <div>
                                    <a href={this.state.ownerProfile}>
                                        <img
                                            className='ownerImg rounded-circle m-2'
                                            src={this.state.ownerProfileImg}
                                            alt=''></img>
                                    </a>
                                </div>
                                <div>
                                    <span>
                                        <a className='link fs-5 fw-bold' href={this.state.ownerProfile}>
                                            Mahmoud Talaat
                                        </a>
                                    </span>
                                    <br />
                                    <span>{this.state.ownerFollowers}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input 
                                class="form-control fs-6 mb-3 border-0 border-bottom" 
                                type="text" 
                                placeholder="Tell everyone what your Pin is about" 
                            />
					    </div>
                        <div className='optionsBar d-flex align-items-center align-content-center justify-content-center mb-3'>
                            <div className='d-flex align-items-center align-content-center flex-wrap'>
                                <BoardList />
                                <div> <button type='submit' className='btn m-1 btn-danger rounded-pill'> Save </button> </div>
                                    
                                
                            </div>
                        </div>

                </form>
			</div>
		);
	}
}
export default CreatePin;
