import React, { Component } from 'react'

class OptionsList extends Component {
    render() { 
        return (
        <div class="dropdown">
            <button type="button"  aria-expanded="false" data-bs-toggle="dropdown" className='btn optionsLeft m-1'>
                <i class="fas fa-ellipsis-h"></i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
    }
}
 
export default OptionsList;