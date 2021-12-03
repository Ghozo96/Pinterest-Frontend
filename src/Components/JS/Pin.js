import React, {Component} from 'react';
import '../CSS/Pin.css';
import BoardList from './BoardList';
import OptionsList  from './OptionsList';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import Comment from './Comments';


class Pin extends Component {
	constructor(){
        super();
		this.state= {
			staticPic: 'https://i.stack.imgur.com/d1JEp.png',

			title:'',
			description:'',
			alt_description: '',
			pin_picture:'',
			destination_link:'',
			pin_saved:true,

			comment_content:'',

			owner:'',
			owner_username:'',
			profilePic:'',
			comments:[],
			likes:'',
			following:true, 

			pin_id:'34',


			userid : window.localStorage.getItem('user_id'),
			username: window.localStorage.getItem('username'),
			profile_picture :window.localStorage.getItem('profile_picture'),
			token : window.localStorage.getItem('token') ,
			
			myheader : new Headers(),	
			}
	};

	getUrl=(id)=>{
		return `${process.env.REACT_APP_HOST_IP}/pin/${id}`
	}

	componentDidMount = async () => {	
		this.state.myheader.append('Authorization', `Token ${this.state.token}`); 		
		var requestOptions = {
			method: 'GET',
			headers: this.state.myheader, };

		let response = await fetch(this.getUrl(this.state.pin_id),requestOptions);
		let data = await response.json();

		console.log(data)
		console.log(this.state.myheader , this.state.token)
		this.setState({...data}, () =>{ this.setState({loading: false});}	);		
	};

	savePin=async ()=>{
		var requestOptions = {
			method: 'PATCH',
			headers: this.state.myheader,
			body: {},
			};
		let savecase= this.state.pin_saved? 'unsave':'save'
		console.log(savecase)
		
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/${this.state.pin_id}/${savecase}`,requestOptions);
		let data = await response.json();
		if (response.status == 400) {
			this.setState({wrongCredentials: true});
		} else {
		this.setState({pin_saved: !this.state.pin_saved})}
		console.log(data)

	}

	follow=async()=>{
		var formdata = new FormData();
		formdata.append("user_id", this.state.owner);

		var requestOptions = {
		method: 'PATCH',
		headers: this.state.myheader,
		body: formdata,
		};
		let followcase= this.state.following? 'unfollow':'follow'
		console.log(followcase)
		
		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/profile/${this.state.owner}/${followcase}`,requestOptions);
		let data = await response.json();
		if (response.status == 400) {
			this.setState({wrongCredentials: true});
		} else {
		this.setState({following: !this.state.following})}
		console.log(data)
		// change the buttun to infollow
	}

	addComment=async()=>{
		var formdata = new FormData();
		formdata.append("content", this.state.comment_content);

		var requestOptions = {
		method: 'POST',
		headers: this.state.myheader,
		body: formdata,
		};

		let response = await fetch(`${process.env.REACT_APP_HOST_IP}/pin/${this.state.pin_id}/comment`,requestOptions);
		let data = await response.json();
		console.log(data)
		let newComments=[...this.state.comments, {
				"content": this.state.comment_content,
				"owner": this.state.userid,
				"owner_username": this.state.username,
				"profilePic":this.state.profile_picture
			}]
		this.setState({ comments: newComments })
		this.setState({comment_content:''});

		// clear el comment content w refeetch or create new comment 
	}

	ChangeHandler=(e)=>{
        this.setState({ [e.target.name]: e.target.value});
    }


	render() {
		
		return (
			<div className='container pinContainer d-flex flex-lg-row flex-column my-5 text-start'>
				<div className='imgContainer d-flex align-items-start justify-content-center'>
					<img src={this.state.pin_picture? this.state.pin_picture:this.state.staticPic} alt=''></img>
				</div>
				<div className='metaContainer d-flex flex-column p-3'>
					<div className='optionsBar d-flex align-items-center align-content-center justify-content-between'>
						<div className='d-flex align-items-center align-content-center flex-wrap'>
							<OptionsList />
							<div>
								<button type='button' className='btn optionsLeft m-1 rounded-pill'>
									<i class='fas fa-link'></i>
								</button>
							</div>
						</div>
						<div className='d-flex align-items-center align-content-center  flex-wrap'>
							<BoardList />
							<div>
								<button
									type='button'
									className='btn optionsRight m-1 btn-danger rounded-pill' onClick={this.savePin}>
									{this.state.pin_saved? 'Unsave':'Save'}
								</button>
							</div>
						</div>
					</div>

					<div>
						<a className='link' href={this.state.destination_link}>
							{this.state.destination_link}
						</a>
					</div>

					<div>
						<h2>{this.state.title}</h2>
					</div>

					<div>
						<p>{this.state.description}</p>
					</div>

					<div className='owner d-flex align-items-center align-content-center justify-content-between'>
						<div className='d-flex align-items-center align-content-center'>
							<div>
								{/* replace with owner profile link with owner_id */}
								<a href={this.state.owner}>  
									<img
										className='ownerImg rounded-circle m-2'
										src={process.env.REACT_APP_HOST_IP +this.state.profilePic}
										alt='profile pic'></img>
								</a>
							</div>
							<div>
								<span>
									{/* replace with owner profile link with owner_id */}
									<a className='link' href={this.state.ownerProfile}>
										{this.state.owner_username}
									</a>
								</span>
								{/* <br />
								<span>{this.state.ownerFollowers}</span> */}
							</div>
						</div>
						<div className='d-flex align-items-center align-content-center'>
							<div>
								<button
									type='button'
									className='btn optionsRight m-1 btn-danger rounded-pill' onClick={this.follow}>
									{this.state.following? 'UnFollow':'Follow'}
								</button>
								{/* <button
									type='button'
									className='btn optionsRight m-1 btn-danger rounded-pill'>
									UnFollow
								</button> */}
							</div>
						</div>
					</div>
					<div className='commentsContainer d-flex flex-column  align-content-start mt-3'>
						<h5> Comments </h5>{' '}
							{this.state.comments.map((mycomments) => {
							return (
								 <Comment  {...mycomments} 
								//  key={mycomments.id}
								 />
								);
							})}
							
						<div className='addComment d-flex align-items-center align-content-center'>
							<div>
								<img
									className='meImg  m-3'
									src={this.state.profile_picture}
									alt='my profile pic'></img>
							</div>
							<div className='flex-grow-1 me-3'>
								<input
									type='text'
									class='form-control'
									placeholder='Add Comment'
									aria-label='Username'
									aria-describedby='basic-addon1'
									name='comment_content'
									value={this.state.comment_content}
									onChange={this.ChangeHandler}
								/>
							</div>
							<button type='button' class='btn btn-danger rounded-pill'onClick={this.addComment}>
								Add
							</button>
						</div>
			</div>
					
				</div>
			</div>
		);
	}
}
export default Pin;
