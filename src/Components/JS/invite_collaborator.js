import React, {Fragment, useState} from 'react';

const InviteCollaborators = () => {

  
	return (
		<Fragment>
			<div className='container text-center'>
				<div style={{margin: '0 30%'}}>
					<form
						name='form'
                  
						className='form d-flex flex-column justify-content-space-between border border-2 rounded-3 shadow-sm mt-5 py-3'>
						<div className='d-flex flex-column mb-3'>
							
							<div className='lead fs-3 fw-bold '>
                            Invite collaborators
							</div>
							
						</div>
						<div className='d-flex flex-column mx-md-5 align-items-center'>
							<div className='lead fs-5 fw-normal mb-2'>
                            Collaborators can: add, move or delete Pins and sections, comment and react
							</div>
							
							<input
								type='text'
								name='email'
								className={`form-control rounded-3 mx-4 my-3 shadow-sm rounded-pill`}
								placeholder='Enter the Collaborator Email'
							/>
							</div>
                            <button
							type='submit'
							className='flex-fill btn btn-danger btn-lg rounded-pill px-4 mb-4 mt-0 shadow-sm align-self-center'>
							Invite
						</button>
					</form>
					
				</div>
			</div>
		</Fragment>
	);
};

export default InviteCollaborators;
