
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Signup Successful! Please log in.");
        setTimeout(() => navigate("/login"), 2000); 
        setName("");
        setEmail("");
        setPassword("");
       } else {
        setError(` ${data.message || "Signup failed"}`);
      }
    } catch (error) {
      setError("Server error. Please try again later.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="loginpagecont">
      <div className="ap">
       <h2 className="logh2">Sign Up</h2>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="loginform" onSubmit={handleSubmit}>
        <center>
        <label className="lo0">Name:</label><br></br>
        <br></br>
        <input className="login" type="text" value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        /><br></br>
        <br></br>

        <label className="logla">Email:</label><br></br>
        <br></br>
        <input
          className="login"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        /><br></br>
<br></br>
        <label className="logla">Password:</label><br></br>
        <br></br>
        <input
          className="login"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          required
        /><br></br>
<br></br>
        <button type="submit">Sign Up</button>
        
      <p className="logp">
        Already have an account? <a href="/login">Login</a>
      </p>
      </center>
      </form>
    </div>
    </div> 
  );
};

export default Signup;
