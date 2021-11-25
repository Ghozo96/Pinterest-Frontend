import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/navbar.css';
import Update from './update';


function NavBar()  {
        
  return (
    // 
    <div className="my-0" id="bootstrap-overrides">
      

    <nav className="d-flex p-1  navbar-fixed-top" id="navbar1">
                
              <Link to="#" className="mt-1 ms-4 nav-item nav-link  nav-elem" id="logo"><i className="fab fa-pinterest fa-2x"></i></Link>
      
            <Link to="#" className="nav-item nav-link  nav-elem me-1 mt-1" id="nav-elem1">Home</Link> 
            
      <div className="ms-0 me-2 mt-1 flex-grow-1 " >
        <form className="input-group   flex-nowrap"> 
          <input type="text" className="form-control" placeholder="Search" id="search-bar"></input>
          <button type="button" className="btn nav-elem ms-1" id="search-btn"><i className="fas fa-search fa-lg"></i></button>
        </form>
      </div>
            
       <Update/>
       
        

        <Link to="#" className="mt-1 mx-2 nav-item nav-link nav-elem" id="nav-elem4"><i className="far fa-user-circle fa-lg"></i></Link>
        
        <div className="dropdown nav-item  mt-1">
            <a href="#" className="nav-item nav-link  nav-elem " id="nav-elem5" data-bs-toggle="dropdown"><i className="fas fa-chevron-down fa-lg"></i></a>
              <div className="dropdown-menu">
               <a href="#" className="dropdown-item">Inbox</a>
               <a href="#" className="dropdown-item">Sent</a>
               <a href="#" className="dropdown-item">Drafts</a>
        </div>
       </div>
      
    
    </nav>
 
 
</div>
// 
  );
};

export default NavBar;