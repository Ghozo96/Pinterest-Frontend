import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/js/bootstrap';

class AddButton extends React.Component {
    render() { 
        return (
            <div>

            <div class="btn-group dropstart">
                <button 
                    type="button" 
                    className="btn btn-lg btn-light fw-bold rounded-circle" 
                    style={{
                        position:'fixed',
                        top:'80%',
                        left:'90%',
                        zIndex:'100',
                    }}
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" >
                    +
                    
                    </button>
                <ul className="dropdown-menu">
                    <li className='dropdown-item'><a className='link' href='#'>Create Pin</a></li>
                    <li className='dropdown-item'><a className='link' href='#'>Create Board</a></li>
                </ul>
            </div>
          
                
            </div>)
            ;
    }
}
 
export default AddButton;