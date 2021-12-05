import React, { Component } from 'react'
import Board from './Board';

class BoardList extends Component {
    state={
        myheader : new Headers(),
    }

    componentDidMount = () => {  	
		this.state.myheader.append('Authorization', `Token ${window.localStorage.getItem('token')}`); 	
    }	 

    addToBoard= async (id)=>{
        console.log(id)

        var formdata = new FormData();
		formdata.append("pin_id", this.props.pin_id);

        var requestOptions = {
			method: 'PATCH',
			headers: this.state.myheader,
			body:formdata,
			};
		// let savecase= this.state.pin_saved? 'unsave':'save'
		// console.log(savecase)
		
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/board/${id}/savepin`,requestOptions);
		let data = await response.json();
        let msg=''
		if (response.status == 400) {
            if( data.message=='pin already saved in that board'){
            msg=data.message 
            }else{
            msg='serverError'	}	
		} else {
            msg='added succerfully'
         }
        //  console.log(msg)
         this.props.Sum_Handle(msg)
    }
    
    render() { 
        console.log(this.props.my_boards,'list')

        return (
        <div class="dropdown d-inline-block">
        <button class="btn btn-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Board
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            
        {this.props.my_boards? this.props.my_boards.map((board) => {
            return (
                <li key={board.id}><span class="dropdown-item" key={board.id} onClick={() => this.addToBoard(board.id)}>{board.name}</span></li>
                );
            }):

            <li><a class="dropdown-item">Board 1</a></li>
            }

        </ul>
        </div>
    )
    }
}
 
export default BoardList;