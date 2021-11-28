import React, { Component } from 'react'

class BoardList extends Component {
    render() { 
        return (
        <div class="dropdown d-inline-block">
        <button class="btn btn-secondary dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Board
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item">Board 1</a></li>
            <li><a class="dropdown-item">Board 2</a></li>
            <li><a class="dropdown-item">Board 3</a></li>
        </ul>
        </div>
    )
    }
}
 
export default BoardList;