import React from "react";
import "./welcome.scss";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div className='welcome'>
    <div className='main'>
        <img className='logo' src="assets/Group.jpg" />

        <div className='background'>
            <img src="assets/pablo-sign-in 1.jpg"/>
        </div>
    </div>

<div className='cover'>
    <div className='head'>
   <h1 className='header'>Welcome!</h1>
   <p>Enter details to login</p> 
    </div>
    <div className="body">
      <div>
   <input className='input' type="email" placeholder='Email'></input>
   <input className='input' type="password" placeholder='Password'></input>
      </div>
   <div>
    <a href='#'>forgot password?</a>
   </div>
   <div>
    <Link to="/home" className="linkbtn">
      <button className='btn'>log in</button>
    </Link>
   </div>
    </div>
</div>
</div>
  );
};
export default Welcome;
