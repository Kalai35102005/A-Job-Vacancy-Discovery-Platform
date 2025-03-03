
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
 mongoose.connect("mongodb://localhost:27017/house")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));
  const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    password: { type: String, required: true },
  });
  
  const User = mongoose.model("User", userSchema);
  
  
  app.post("/signup", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
     
      const existingUser = await User.findOne({ email: new RegExp(`^${email}$`, "i") });
      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }
  
     
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
      console.error("Error in /signup:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
const JobseekerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  youremail: { type: String, required: true, unique: true },
  yourpassword: { type: String, required: true },
  company: { type: String, required: true },
  contactnumber: { type: String, required: true },
  resume: { type: String, required: true },
});
const Jobseeker = mongoose.model("jobseekers", JobseekerSchema);
app.post("/jobseekers", async (req, res) => {
  try {
    const { fullname, youremail, yourpassword, company, contactnumber, resume } = req.body;
const existingJobseeker = await Jobseeker.findOne({ youremail: new RegExp(`^${youremail}$`, "i") });
    if (existingJobseeker) {
      return res.status(400).json({ message: "Email already registered as jobseeker" });
    }
 const newJobseeker = new Jobseeker({
      fullname,
      youremail,
      yourpassword,
      company,
      contactnumber,
      resume,
    });
    await newJobseeker.save();
    res.status(201).json({ message: "Jobseeker registered successfully!" });
  } catch (error) {
    console.error("Error in /jobseekers:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const HclJobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
 
  postedAt: { type: Date, default: Date.now },
});

const HclJob = mongoose.model("HclJob", HclJobSchema);
app.post("/hcl", async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;
    if (!title || !description || !location || !salary) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newJob = new HclJob({ title, description, location, salary });
    await newJob.save();
    res.status(201).json({ message: "Job Vacancy posted successfully!" });
  } catch (error) {
    console.error("Error in /hcl:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const CtsJobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
});
const CtsJob = mongoose.model("CtsJob", CtsJobSchema);
app.post("/cts", async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;

    if (!title || !description || !location || !salary) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newJob = new CtsJob({ title, description, location, salary });
    await newJob.save();

    res.status(201).json({ message: "Job Vacancy posted successfully!" });
  } catch (error) {
    console.error("Error in /cts:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const MicrosoftJobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
});
const MicrosoftJob = mongoose.model("MicrosoftJob", MicrosoftJobSchema);
app.post("/microsoft", async (req, res) => {
  try {
    const { title, description, location, salary } = req.body;
    if (!title || !description || !location || !salary) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newJob = new MicrosoftJob({ title, description, location, salary });
    await newJob.save();

    res.status(201).json({ message: "Job Vacancy posted successfully!" });
  } catch (error) {
    console.error("Error in /microsoft:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


