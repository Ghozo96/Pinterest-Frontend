import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/update.css';
import UpdateComponent from './update_component';


function Update2()  {
        
    return (
        <div className="dropdown nav-item mt-1 " id="bootstrap-overrides3">
          <div className="dropdown nav-item mt-0">
              <a className="nav-item nav-link nav-elem" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="far fa-bell fa-lg"></i>
              </a>
              <ul className="dropdown-menu  overflow-auto" aria-labelledby="dropdownMenuButton1"  id="dd-nav">
                <li className="fixed-top "><div><h5 className="dropdown-header lead fw-bold" id="update-header">Your Notifications</h5></div></li>
                  <br ></br><br ></br>
                
                  <UpdateComponent/>
                  <UpdateComponent/>
                  <UpdateComponent/>
                       
              </ul>
           </div>
        </div>
        );
    };

    export default Update;