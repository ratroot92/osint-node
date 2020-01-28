import React, { Component } from 'react';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';
import About from './About';
import Protected from './auth/Protected';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class Navbar extends Component {
	render() {
		return (
			<div className="container-fluid">
			<div className="row">
			 <div className="col-md-12 m-0 p-0 ">
       <Router>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="home" >Osint React</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="dashboard" >Dashboard </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="aboutus" >About Us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link "to="login" >Login</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 <Switch>
          <Route path="/home">
            <Protected cmp={Home}/>
          </Route>
          <Route path="/dashboard">
         
            <Protected cmp={Dashboard}/>
          </Route>
          <Route path="/aboutus">
           <Protected cmp={About}/>
          </Route>

           <Route path="/login">
         
           <Login/>
          </Route>
        </Switch>
     </Router>
			 </div>
			</div>
			</div>
		);
	}
}
