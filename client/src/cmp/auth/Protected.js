import React from 'react';
import {Redirect} from 'react-router-dom';
function Protected (props)  {
	const Cmp=props.cmp;
	var token=localStorage.getItem("auth_token");
	console.log(token);

  return (
    <div>{token ? <Cmp/> : <Redirect to="login"></Redirect> }</div>
  )
}

export default Protected;