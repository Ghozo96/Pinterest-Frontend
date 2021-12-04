import React, { Component } from 'react'
import '../CSS/EditBoard.css'
import InviteCollaborators from './invite_collaborator';


class EditBoard extends React.Component {
    render() { 
        return (
        <div className='container my-5'>
        <form className='editBoardContainer p-4'>          
            
            <h2 className='text-center m-4 mt-2'>
                Edit Board
            </h2>

            <div className='bocardCoverInput'>                        
                <p className='mb-0'>Board Cover </p>
                <label for="image">
                <input 
                type="file" 
                name="image"
                id="image"
                style={{display:'none'}} 
                accept="image/*"
                />
                <i className="fas fa-upload uploadIconB "/> 
                </label>                   
            </div>
        
            <div className="my-3">
                <label for="boardName" className="mb-1 ms-1 ">Name</label>
                <input type="text" className="form-control rounded-pill" id="boardName" placeholder="Borad Name" />
            </div>

            <div className="my-3">
                <label for="boardDescription" className="mb-1 ms-1 ">Description</label>
                <textarea type="text" className="form-control rounded-pill" id="boardDescription" placeholder="Description" />
            </div>

            <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label fw-bold" for="flexCheckDefault">
                     Keep This Board Secret
                </label>
                <p className="text-muted">
                    So only you and collaborators can see it.
                </p>
            </div>
            
            <p className='mb-0'>Collaborators</p>
            <div className='collab d-flex'>
                <div>
                    <a href='https://i.pinimg.com/564x/fa/48/a7/fa48a71531f8de2b40c6a10aad511691.jpg'>
                    <img
                    className='ownerImg rounded-circle m-2'
                    src='https://i.pinimg.com/564x/fa/48/a7/fa48a71531f8de2b40c6a10aad511691.jpg'
                    alt=''></img>
                    </a>
                </div>
            </div> 

            <div className="d-flex justify-content-end">
                <button className="btn btn-danger rounded-pill" type="button">Done</button>
            </div>
        </form>
        </div>);
    }
}
 
export default EditBoard;