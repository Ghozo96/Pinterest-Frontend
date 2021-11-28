import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/user_following.css';



function FollowingComponent()  {
        
    return (
        <li id="bootstrap-overrides4" className="mx-2"><Link class="dropdown-item" id="notif" to="#">
            <div className="d-flex flex-nowrap ">
            <div className="align-self-center"><img id="notif_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"></img>
            </div>
           <div className="align-self-center ms-2 mt-3" id="notif-text" ><p className="text-capitalize text-wrap text-start fs-6"> User Following</p> </div>
            </div>
            </Link></li>
        );
    };

export default FollowingComponent;
