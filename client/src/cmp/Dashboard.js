import React, { Component } from 'react';

export default class Dashboard extends Component {


constructor(props){
	super(props);
	this.state={
		userlist:[],
	}
//this.api = this.api.bind(this);
}


 async componentDidMount(){
 	//start of function 1
this.api('login/users').then((response)=>{

	if(response.status=='200'){
	console.log(`response.status : ${response.status}`);
	console.log(`response info : ${response.info}`);
	console.log(`response message: ${response.message}`);
	console.log(response);	
	this.setState({userlist:response.userList})	
	//console.log(this.state)	
	}
	else{
	console.log(response);
	}
});
//end 

}

 api =async url =>{
 	  try {
const auth_token=localStorage.getItem('auth_token');
const settings = {
method: 'GET',
headers: {
 'Content-Type': 'application/json',
  'Accept': 'application/json',
"Authorization": `Bearer ${auth_token}`,
}
}
	const baseUrl='http://localhost:3001/api/login/users';
	const response=await fetch(baseUrl,settings);
	const data=await response.json()
	return data;
 } catch(e) {
        console.log('error: ', e);  
    }
}

	render() {
console.log(this.state)
		return (
			<div><ul>
      
        {this.state.userlist.map(home => <li key={home._id}>{home._id}</li>)}
        
     
      </ul>
		</div>
		);
	}
}








//sync get api 
// let URL='http://localhost:3001/api/login/users';
// console.log(`GET Request :${URL}`)
// const auth_token=localStorage.getItem('auth_token');
// fetch(URL,{
// method:"GET",
// headers:{
// "Accept":"application/json",
// "Content-Type":"application/json",
//  "Authorization": `Bearer ${auth_token}`,
// },

// }).then((result)=>{
// result.json().then((resposne)=>{
	
// 	if(resposne.status=='200'){
// 	console.log(`resposne.status : ${resposne.status}`);
// 	console.log(`resposne info : ${resposne.info}`);
// 	console.log(`resposne message: ${resposne.message}`);
// 	console.log(resposne);			
// 	}
// 	else{
// 	console.log(resposne);
// 	}


// })
// })