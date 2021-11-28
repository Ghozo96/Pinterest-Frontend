import React, { Component } from 'react'
import '../CSS/CreateBoard.css'

class CreateBoard extends React.Component {
    render() { 
        return (
        <div className='container mt-5'>
            <form className='createBoardContainer p-4'>
            <h2 className='text-center m-4 mt-2'>
                Create Board
            </h2>

            <div className="my-3">
                <label for="boardName " className="mb-1 ms-1 ">Name</label>
                <input type="text" className="form-control rounded-pill" id="boardName" placeholder="Borad Name" />
            </div>

            <div className="my-3">
                <label for="boardDescription" className="mb-1 ms-1 ">Description</label>
                <textarea type="text" className="form-control rounded-pill" id="boardDescription" placeholder="Description" />
            </div>

            <div className="form-check my-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label fw-bold" for="flexCheckDefault">
                     Keep This Board Secret
                </label>
                <p className="text-muted">
                    So only you and collaborators can see it.
                </p>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-danger rounded-pill" type="button">Create</button>
            </div>
            </form>
        </div>);
    }
}
 
export default CreateBoard;