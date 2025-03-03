import React from 'react'
import "./Hom.css";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
       <div className='hom1'>
       
            <div className='hom2'>
            <h1>Search Online Jobs!!!</h1>
                </div>
                <div className='u'>
                <div className="hom4">
          <nav>
            <Link to="/aboutus">About Us</Link>
          </nav>
        </div>
        <div className="hom5">
          <nav>
            <Link to="/Contactus">Contact Us</Link>
          </nav>
        </div>
        <div className="hom6">
          <nav>
            <Link to="/signup">Sign Up</Link>
          </nav>
        </div>
          <div className="hom7">
          <nav>
            <Link to="/jobseekers">Job Seekers</Link>
          </nav>
        </div>   
         <div className="hom13">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </div> 
         <div className="hom14">
          <nav>
            <Link to="/Cts">Cts</Link>
          </nav>
        </div>
        <div className="hom15">
          <nav>
            <Link to="/Hcl">Hcl</Link>
          </nav>
        </div>
        <div className="hom16">
          <nav>
            <Link to="/Microsoft">Microsoft</Link>
          </nav>
        </div>
        <div className="hom17">
          <nav>
            <Link to="/Jobdetails">Jobdetails</Link>
          </nav>
        </div>   
                </div>
                <Outlet />
                <div className='hom9'>
            <div className='hom3'></div>
                <div className='hom8'>
                <div className='hom9'></div>
                    <h1 className='hom10'>Your Future Starts Now</h1>
                
            </div>
            
    
       </div>
    </div>
    </div>
  )
}
