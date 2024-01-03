import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
<div class="login-box">
  <h2>LOGIN</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""></input>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""></input>
      <label>Password</label>
    </div>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
      <Link to='/'>Login</Link>
    <br></br>
    <Link to='/Signup'>Create an Account</Link>

  </form>
</div>
  );
};

export default Login;
