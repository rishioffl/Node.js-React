import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Signup.css';

function Signup(){
  return (
<div class="login-box">
  <h2>SIGN-UP</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""></input>
      <label>First Name</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""></input>
      <label>Last Name</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""></input>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="mail" name="" required=""></input>
      <label>Email-Id</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""></input>
      <label>Mobile Number</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""></input>
      <label>One Time Password</label>
    </div>
        <Link to='/Login'>Sign-Up</Link>
  </form>
</div>
  );
};

export default Signup;