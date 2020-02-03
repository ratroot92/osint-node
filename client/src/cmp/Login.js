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
				this.setState({isAuth:true});
				localStorage.setItem("auth_token",JSON.stringify(response.token));
				console.log("token saved to local storage");
			}
			else{
				console.log("failure");
				this.setState({loginMessage:true,message:'login unsuccessfull !',type:true});
			}
		})
	})

	}
render() {
//	if(this.state.isAuth){
	//	return <Redirect to="dashbaord"/>
//	}
//	else{
return (
<div className="container-fluid">
<div className="row">
<div className="col-md-4"></div>
<div className="col-md-4">
{this.state.loginMessage ? ( <div className={this.state.type ? 'alert alert-danger' : 'alert alert-success'}>{this.state.message}</div>) : null }
<div className="card">
<div className="card-header text-center bg-success font-weight-bold" style={{fontSize:"30px"}}>Login 	</div>
<div className="card-body p-5">
	<div className="form-group">
		<label className="" >email :</label>
				<input type="email"
				name="email"
				id="email"
				className="form-control form-control-lg"
				placeholder="email"
				
				onChange={(e) => {this.setState({ email: e.target.value })}}
				/>
	</div>
	<div className="form-group mt-5">
		<label className="">password :</label>
		<input type="password"
					name="password"
					id="password"
					className="form-control form-control-lg"
					placeholder="password"
					
					onChange={(e) => {this.setState({ password: e.target.value })}}
					/>
	</div>
	</div>
	<div className="card-footer">
	<div className="form-group">
		
		<input type="submit"
			name    ="submit"
			id      ="submit"
			className   ="btn btn-success"
			onClick ={(e)=>this.login(e)} 
			/>
		
	</div>
</div>
	</div>
</div>
<div className="col-md-4"></div>
</div>
</div>
);
}
}
//}