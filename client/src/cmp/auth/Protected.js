import React from 'react';
import {Redirect} from 'react-router-dom';
function Protected (props)  {
	const Cmp=props.cmp;
	console.log(props.cmp)
	//var auth=false;
	var token=localStorage.getItem('auth_token')
	console.log(token);
	//var auth=JSON.parse(token);
	//console.log(auth);
  return (
    <div>{token!='' ? <Cmp/> : <Redirect to="login"></Redirect> }</div>
  )
}

export default Protected;