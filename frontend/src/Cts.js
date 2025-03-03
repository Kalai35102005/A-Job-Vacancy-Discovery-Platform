
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cts.css";

export default function Cts() {
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
      const response = await fetch("http://localhost:5000/cts", {
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
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div>
      <div className="ctt">
        <div className="ct">
          <h2>Post a Job Vacancy for CTS</h2>
        </div>
        <form className="ct0" onSubmit={handleSubmit}>
          <center>
            <label className="ct1">Job Title:</label>
            <br />
            <input
              className="ct2"
              type="text"
              name="title"
              value={title}
              placeholder="Enter your job title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <br />
            <label className="ct1">Job Description:</label>
            <br />
            <textarea
              className="ct2"
              name="description"
              value={description}
              placeholder="Enter job description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <br />
            <label className="ct1">Location:</label>
            <br />
            <input
              className="ct2"
              type="text"
              name="location"
              value={location}
              placeholder="Enter location"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <br />
            <label className="ct1">Salary:</label>
            <br />
            <input
              className="ct2"
              type="text"
              name="salary"
              value={salary}
              placeholder="Enter salary"
              onChange={(e) => setSalary(e.target.value)}
              required
            />
            <br />
            <button className="ct9" type="submit">
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
