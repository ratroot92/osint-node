import React, { Component } from 'react';

export default class Dashboard extends Component {


constructor(props){
	super(props);
	this.state={
		userlist:[],
	}
}


componentDidMount(){
	console.log("request made ")
	fetch('http://localhost/api/login/users',{
		method:"GET",
	headers:{
		"Accept":"application/json",
		"Content-Type":"application/json",
	},
}).then((result)=>{
	result.json().then((resposne)=>{
		console.log(resposne)
})
})
}



	render() {
		return (
			<div>Dashboard Page</div>
		);
	}
}
