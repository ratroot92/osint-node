import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export  default class Login extends Component {
	

	constructor(props){
		super(props);
		this.state={
			loginMessage:false,
			message:'',
			type:true,
			isAuth:false,
		}
	}

login(){
	console.log(this.state)
	



	fetch('http://localhost:3001/api/login',{
	method:"POST",
	headers:{
		"Accept":"application/json",
		"Content-Type":"application/json",
	},
	body:JSON.stringify(this.state)}).then((result)=>{
		result.json().then((response)=>{
			console.log(response);
			if(response.status=='200'){
				console.log("success")
				this.setState({loginMessage:true,message:'login successfull !',type:false});
				localStorage.setItem("auth_token",response.token);
				var token=localStorage.getItem("auth_token");
				this.setState({isAuth:true});
				//console.log(token);
			}
			else{
				console.log("failure");
				this.setState({loginMessage:true,message:'login unsuccessfull !',type:true});
			}
		})
	})

	}
render() {
	if(this.state.isAuth){
		return <Redirect to="dashbaord"/>
	}
return (
<div className="container-fluid">
<div className="row">
<div className="col-md-4"></div>
<div className="col-md-4">
{this.state.loginMessage ? ( <div className={this.state.type ? 'alert alert-danger' : 'alert alert-success'}>{this.state.message}</div>) : null }

	<div className="form-group">
		<label>email :</label>
				<input type="email"
				name="email"
				id="email"
				className="form-control"
				placeholder="email"
				
				onChange={(e) => {this.setState({ email: e.target.value })}}
				/>
	</div>
	<div className="form-group">
		<label>password :</label>
		<input type="password"
					name="password"
					id="password"
					className="form-control"
					placeholder="password"
					
					onChange={(e) => {this.setState({ password: e.target.value })}}
					/>
	</div>
	<div className="form-group">
		
		<input type="submit"
			name    ="submit"
			id      ="submit"
			className   ="btn btn-success"
			onClick ={(e)=>this.login(e)} 
			/>
		
	</div>
</div>
<div className="col-md-4"></div>
</div>
</div>
);
}
}