import React, { Component } from 'react'

class Comment extends React.Component {
    render() { 
        return (
            
            <div className='commentsContainer d-flex flex-column  align-content-start mt-3'>
						<h5> Comments </h5>{' '}

						
                        <div className='d-flex align-items-center align-content-center' >
                            <div>
                                <img className='meImg  m-3' src='https://i.pinimg.com/564x/07/f5/93/07f59373371952f07abb88f7879a12f7.jpg' alt=''></img>
                            </div>
                            <div className='container border border-danger rounded-pill d-flex align-items-center align-content-center p-3' style={{minHeight:'3rem'}}>
                                <span>Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla</span>
                                <span className='text-muted fst-italic px-2'>20 mins</span>
                            </div>
                        </div>
                        
                        
                        <div className='addComment d-flex align-items-center align-content-center'>
							<div>
								<img className='meImg  m-3' src='https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg' alt=''></img>
							</div>
							<div className='flex-grow-1 me-3'>
								<input
									type='text'
									class='form-control'
									placeholder='Add Comment'
									aria-label='Username'
									aria-describedby='basic-addon1'
								/>
							</div>
                            <button type="button" class="btn btn-danger rounded-pill">Add</button>

						</div>
			</div>
            
            );
    }
}
 
export default Comment;