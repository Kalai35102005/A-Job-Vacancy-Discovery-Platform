
// import React from 'react'
// import  "./Microsoft.css";
// export default function Microsoft() {
//   return (
//     <div>
//         <div className='micc'>
//        <div className='mic'>
//      <h2>Post a Job Vacancy for Microsoft</h2></div>
//      <form className='mi0'>
//         <center>
//         <label className='mi'>Job Title:</label><br></br>
       
//          <input  className='mi2'type="text" name="title" required /><br></br>

//         <label className='mi'>Job Description:</label><br></br>
       
//         <textarea className='mi2' name="description"  required/><br></br>
       
//         <label className='mi'>Location:</label><br></br>
       
//         <input className='mi2' type="text" name="location" required/><br></br>
       
//        <label className='mi'>Salary:</label><br></br>
       
//        <input className='mi2' type="text" name="salary" required/><br></br>
        
//         <button className='mi9' type="submit">Post Job</button>
//         </center>      </form>
//    </div> 
//     </div>
//   )
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Microsoft.css";

export default function Microsoft() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Prepare the data as JSON
    const dataToSend = { title, description, location, salary };

    try {
      const response = await fetch("http://localhost:5000/microsoft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Job Vacancy posted successfully!");
        // Delay navigation to allow user to see success message
        setTimeout(() => {
          navigate("/jobdetails");
        }, 2000);
      } else {
        setError(data.message || "Failed to post job.");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="microsoft-container">
      <div className="micc">
        <div className="mic">
          <h2>Post a Job Vacancy for Microsoft</h2>
        </div>
        <form className="mi0" onSubmit={handleSubmit}>
          <center>
            <label className="mi">Job Title:</label>
            <br />
            <input
              className="mi2"
              type="text"
              name="title"
              placeholder="Enter job title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <label className="mi">Job Description:</label>
            <br />
            <textarea
              className="mi2"
              name="description"
              placeholder="Enter job description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br />
            <label className="mi">Location:</label>
            <br />
            <input
              className="mi2"
              type="text"
              name="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <br />
            <label className="mi">Salary:</label>
            <br />
            <input
              className="mi2"
              type="text"
              name="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
            <br />
            <button className="mi9" type="submit">
              Post Job
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
          </center>
        </form>
      </div>
    </div>
  );
}
