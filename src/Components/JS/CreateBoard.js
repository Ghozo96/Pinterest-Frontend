import React, { Component } from 'react'
import '../CSS/CreateBoard.css'

class CreateBoard extends React.Component {

    constructor(){
        super();
        this.state={

        name:'',
        description:'',

        submited:false,

        userid : window.localStorage.getItem('user_id'),
        username: window.localStorage.getItem('username'),
        token : window.localStorage.getItem('token') ,
        
        myheader : new Headers(),	
         }
        };

    getUrl=()=>{
        return `${process.env.REACT_APP_HOST_IP}/board/create` ;
    }
    componentDidMount=()=>{
        this.state.myheader.append("Authorization", `Token ${this.state.token}`);

    }

    handleSubmit = async (e) => {
		e.preventDefault();
		this.setState({submited:false})

        var formdata = new FormData();
            formdata.append( 'name',   e.target.name.value);
            formdata.append ('description'  , e.target.description.value);
            

        var requestOptions = {
            method: 'POST',
            headers: this.state.myheader,
            body:  formdata, };
        
        let response = await fetch(this.getUrl(), requestOptions);
        let data = await response.json();
        
        console.log(data)
        this.setState({submited:true})
		// here we will redirect to the home page

	}


    render() { 
        return (
        <div className='container mt-5'>
            <form className='createBoardContainer p-4' onSubmit={this.handleSubmit} >
            <h2 className='text-center m-4 mt-2'>
                Create Board
            </h2>

            <div className="my-3">
                <label for="boardName " className="mb-1 ms-1 ">Name</label>
                <input type="text" className="form-control rounded-pill" name="name" placeholder="Borad Name" />
            </div>

            <div className="my-3">
                <label for="boardDescription" className="mb-1 ms-1 ">Description</label>
                <textarea type="text" className="form-control rounded-pill" name="description" placeholder="Description" />
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
                <button className="btn btn-danger rounded-pill" type="submit">Create</button>
            </div>
            </form>
        </div>);
    }
}
 
export default CreateBoard;