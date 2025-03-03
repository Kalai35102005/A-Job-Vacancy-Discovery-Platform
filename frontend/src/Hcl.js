

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hcl.css";

export default function Hcl() {
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

    const dataToSend = { title, description, location, salary };

    try {
      const response = await fetch("http://localhost:5000/hcl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Job Vacancy posted successfully!");
       
        setTimeout(() => {
          navigate("/jobdetails");
        }, 2000); 
      } else {
        setError(data.message || "Failed to post job.");
      }
    } catch (error) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div>
      <div className="hcll">
        <div className="hcl">
          <h2>Post a Job Vacancy for HCL</h2>
        </div>
        <form className="hc0" onSubmit={handleSubmit}>
          <div className="form-content">
            <label className="hc">Job Title:</label>
            <br />
            <input
              className="hc2"
              type="text"
              name="title"
              placeholder="Enter your job title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <label className="hc3">Job Description:</label>
            <br />
            <textarea
              className="hc2"
              name="description"
              placeholder="Enter job description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br />
            <label className="hc">Location:</label>
            <br />
            <input
              className="hc2"
              type="text"
              name="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <br />
            <label className="hc">Salary:</label>
            <br />
            <input
              className="hc2"
              type="text"
              name="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
            <br />
            <button className="hc9" type="submit">
              Post Job
            </button>

           
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            {success && <p style={{ color: "green", marginTop: "10px" }}>{success}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
