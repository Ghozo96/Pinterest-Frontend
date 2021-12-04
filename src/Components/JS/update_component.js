import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/update_component.css';


class UpdateComponent extends Component {

    constructor(){
          super();
      this.state= {
          link_to:'',
	
        }
    };
    componentDidMount =()=>{
        if (this.props.type=='follow'){
            this.setState({ link_to: '' })
        }else if(this.props.type=='comment' ){
            this.setState({ link_to: '' })
        }else if(this.props.type=='like'){
            this.setState({ link_to: '' })
        }
    }
    render() {   
        return (
            <li id="bootstrap-overrides4" className="mx-2">
                <Link class="dropdown-item" id="notif" to={this.state.link_to}>
                    <div className="d-flex flex-nowrap ">
                    <div className="align-self-center">
                        <img id="notif_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX/q2+jQSCcNxf/rXDsl2D5pGr/r3KmRSOfOxvYgVHqlV+UKgr9qW6WLQ2gPBz/sXPNoVavAAABH0lEQVR4nO3cwW7CMBREUYgppKUt//+3dFvJelYrQcbhnP1IuVtb8eEAAAAAAAAAAAAAAAAAAAAv6/Otq42X/eHjv/iP2sfX0vF9Hk+vveE1LrGdlmPHZVzYusNF4dMpLJYKQygslgpDKCyWCkMoLJYKQygslgpDKCyWCkMoLJYKQygslgpDKCyWCkMoLJaTF97a0OSFp7F16sJj7373t27gRIX/pfD5FCpUuD2FChVuT6FChdtTuN/CdWzywvexuU8xLrfz0OQnUfs/TVSoMIfCYqkwhMJiqTCEwmKpMITCYqkwhMJiqTCEwmKpMITCYqkwhMJiqTCEwmKpMMQLFPbf+lr389bXj96fBo8dAgAAAAAAAAAAAAAAAAAAhLoDRiEgj9lGgfUAAAAASUVORK5CYII="></img>
                    </div>
                    <div className="align-self-center ms-2 mt-3" id="notif-text" >
                        <p className=" text-wrap text-start fs-6">
                            {this.props.notifier_username} {this.props.content}
                            {/* Hi I'm a notification to help you get the latest news */}
                            </p> </div>
                    </div>
                </Link>
            </li>
        );
    };
}

export default UpdateComponent;
