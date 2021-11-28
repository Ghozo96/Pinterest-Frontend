import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import SmallPin from './SmallPin';
import Update from './update';
import UpdateComponent from "./update_component";
import FollowingComponent from './user_following';
import '../CSS/profile_page.css';


const ProfilePage = () => {
	
	

  return (
    <Fragment>
      <div className="d-flex flex-column align-items-center">
        


        <div >
		<img className="rounded-circle mt-4" id="profile_img" style={{width:"120px",height:"120px"}} src="https://i.pinimg.com/736x/b8/ce/d9/b8ced96199e56d254419afc00347769c.jpg" alt="your image"></img>
		</div>

        
          <div className="lead fs-2 mt-0 fw-bold ">Mahmoud Talaat</div>
          <div className="lead fs-6 mt-0 fw-normal ">@mahmoudtalaat2010</div>


          <div className="dropdown mt-2">
            <Link
              to=""
              className="link-dark text-decoration-none fw-bold"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Following
            </Link>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1"
              id="dd-nav-setting"
              style={{maxHeight:"250px"}}
            >
              <li>
                <h6 className="dropdown-header ms-2">Following</h6>
              </li>

              <FollowingComponent/>
              <FollowingComponent/>
              <FollowingComponent/>
              <FollowingComponent/>
              <FollowingComponent/>
              <FollowingComponent/>
              <FollowingComponent/>
            </ul>
          </div>

          
          <div >
          <Link to="" class="btn btn-lg rounded-pill mt-2" id="edit-profile">Edit Profile</Link>
          </div>
          <div className="dropdown mt-4 align-self-end me-4">
            <Link
              to=""
              className="rounded-circle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                className="fas fa-plus fa-2x ms-2 my-1"
                id="board-btn1"
              ></i>
            </Link>
            <ul
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton1"
              id="dd-nav-setting"
            >
              <li>
                <h6 className="dropdown-header ms-2">Create</h6>
              </li>

              <li className="mx-2 ">
                <Link class="dropdown-item lead fw-bolder" id="setting-elem" to="#">
                  Pin
                </Link>
              </li>
              <li className="mx-2 ">
                <Link class="dropdown-item lead fw-bolder" id="setting-elem" to="#">
                  Board
                </Link>
              </li>
            </ul>
          </div>

        <div className="d-flex flex-wrap">
		<div style={{width:"25%",minWidth:"300px",flex:"1"}} className="mx-2"><SmallPin imgLink="https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg" title="Photo Example"/></div>
		<div style={{width:"25%",minWidth:"300px",flex:"1"}} className="mx-2"><SmallPin imgLink="https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg" title="Photo Example"/></div>
		<div style={{width:"25%",minWidth:"300px",flex:"1"}} className="mx-2"><SmallPin imgLink="https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg" title="Photo Example"/></div>
		<div style={{width:"25%",minWidth:"300px",flex:"1"}} className="mx-2"><SmallPin imgLink="https://i.pinimg.com/564x/0e/f5/5a/0ef55ab76c4afb9d5a2b132cde91e8c9.jpg" title="Photo Example"/></div>
		
		</div></div>
      
    </Fragment>
  );
};

export default ProfilePage;