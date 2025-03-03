
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jobseekers.css";

export default function Jobseekers() {
  const [fullname, setFullname] = useState("");
  const [youremail, setYouremail] = useState("");
  const [yourpassword, setYourpassword] = useState("");
  const [company, setCompany] = useState("microsoft");
  const [contactnumber, setContactnumber] = useState("");
  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const dataToSend = {
      fullname,
      youremail,
      yourpassword,
      company,
      contactnumber,
      resume: resume ? resume.name : "",
    };

    try {
      const response = await fetch("http://localhost:5000/jobseekers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Job Seeker Registered Successfully!");
        window.location.href = "/Jobdetails";
      } else {
        setError(data.message || "Failed to register.");
      }
    } catch (error) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div>
      <div className="job">
        <div className="job1">
          <h2>Job Seekers</h2>
        </div>
        <div className="job2">
          <form className="fo" onSubmit={handleSubmit}>
            <center>
              <label className="la">Full Name</label>
              <br />
              <input
                className="in"
                type="text"
                name="fullname"
                placeholder="Enter your name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <br />

              <label className="la">Your Email</label>
              <br />
              <input
                className="in"
                type="email"
                name="youremail"
                placeholder="Enter your email"
                value={youremail}
                onChange={(e) => setYouremail(e.target.value)}
              />
              <br />

              <label className="la">Your Password</label>
              <br />
              <input
                className="in"
                type="password"
                name="yourpassword"
                placeholder="Enter your password"
                value={yourpassword}
                onChange={(e) => setYourpassword(e.target.value)}
              />
              <br />

              <label className="la">Company</label>
              <br />
              <select
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              >
                <option value="hcl">HCL</option>
                <option value="microsoft">Microsoft</option>
                <option value="cts">CTS</option>
              </select>
              <br />

              <label className="la">Contact Number</label>
              <br />
              <input
                className="in"
                type="number"
                name="contactnumber"
                placeholder="Enter your number"
                value={contactnumber}
                onChange={(e) => setContactnumber(e.target.value)}
              />
              <br />

              <div className="form-container">
                <div className="file-upload-container">
                  <label className="la" htmlFor="resume">
                    Upload Resume
                  </label>
                  <br />
                  <input
                    className="in"
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
                <br />
                <button className="bu" type="submit">
                  Submit
                </button>
              </div>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
