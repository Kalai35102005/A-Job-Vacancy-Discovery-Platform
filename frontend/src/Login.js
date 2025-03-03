
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Login attempt", email, password);

   
    if (email && password) {
      alert(`Logged in successfully with email: ${email}`);
      navigate("/Jobseekers"); 
    } else {
      alert("Please enter both email and password");
    }
  };


return (
  <div className="pagecont">
    
    <div className="app">
    <h2>Login</h2>
    <form className='ap1' onSubmit={handleLogin}>
      <center>
      <div className="ap2">
      <label>Email</label><br></br>
      <br></br>
      <input className="ap3" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/><br></br>
      <br></br>
      <label>Password</label><br></br>
      <br></br>
      <input  className="ap4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/><br></br>
      <br></br>
      <button className="ap5" type="submit">Login</button>
      </div></center>
    </form>
  </div></div>
  
);
}

export default Login;
