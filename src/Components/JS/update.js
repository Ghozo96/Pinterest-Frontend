import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/update.css';


function Update()  {
        
    return (
        <div className="dropdown nav-item mt-1">
  
        <div class="dropdown nav-item mt-0">
  <a class="nav-item nav-link nav-elem" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="far fa-bell fa-lg"></i>
  </a>
  <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuButton1"  id="dd-nav">
  <li><div className="justify-content-center"><h5 className="dropdown-header justify-content-center" id="update-header">Update</h5></div></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        
        </div>
        );
    };

    export default Update;