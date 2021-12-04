import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/update.css';
import UpdateComponent from './update_component';
import Spinner from './Spinner';

class Update extends Component {
    constructor(){
          super();
      this.state= {
        staticPic: 'https://i.stack.imgur.com/d1JEp.png',
        loading:true,

        owner:'',
        notifier:'',
        pin:'',
        content:'',
        type:'',
        results:[], 

        userid : window.localStorage.getItem('user_id'),
        username: window.localStorage.getItem('username'),
        profile_picture :window.localStorage.getItem('profile_picture'),
        token : window.localStorage.getItem('token') ,
        
        myheader : new Headers(),	
        }
    };

	getUrl=()=>{
		return `${process.env.REACT_APP_HOST_IP}/notifications`
	}

	componentDidMount = async () => {	
		this.state.myheader.append('Authorization', `Token ${this.state.token}`); 		
		var requestOptions = {
			method: 'GET',
			headers: this.state.myheader, };

		let response = await fetch(this.getUrl(),requestOptions);
		let data = await response.json();

		this.setState({...data}, () =>{ this.setState({loading: false});}	);		
	};

  render() {    
    return (
        <div className="dropdown nav-item mt-1 " id="bootstrap-overrides3">
          <div className="dropdown nav-item mt-0">
              <a className="nav-item nav-link nav-elem" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="far fa-bell fa-lg"></i>
              </a>
              <ul className="dropdown-menu  overflow-auto" aria-labelledby="dropdownMenuButton1"  id="dd-nav">
                <li className="fixed-top "><div><h5 className="dropdown-header lead fw-bold" id="update-header">Your Notifications</h5></div></li>
                  <br ></br><br ></br>
                  {this.state.loading ?
                      <Spinner /> :
                      <div>
                          {this.state.results.map((notification) => {
                            return (
                                    <UpdateComponent
                                    key={notification.id}
                                    {...notification}
                                    />

                                );
                            })}
                      </div>
                  }


              </ul>
           </div>
        </div>
        );
    };
  }

    export default Update;