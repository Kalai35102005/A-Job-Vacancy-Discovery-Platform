import React from 'react'
import  "./Contactus.css";
export default function Contactus() {
  return (
    <div>
    <div className='con'>
        <h1>Contact Us</h1></div>
        <div className='con1'>
        <h3>Any questions or remarks?just write as a message!</h3>
        </div>
        <div className='con2'>
            <form>
                <div className='con37'>
            <label className='con3'>Name</label>
            <label className='con36'>Email</label><br></br>
            <input  className='con22' type="text" placeholder='Enter your name'/>
            <input type="email" placeholder='Enter a valid email'/><br></br>
            <br></br>
            <button className='con48'>submit</button><br></br>
            <br></br>
            </div>
            </form>
        </div>
        <div className='con8'>
        <div className='con5'>
        <div className='con4'>
            <h2>ABOUT CLUB</h2>
            <p>Running Guide Workouts</p>
        </div>
        <div className='con6'>
            <h2>PHONE(LANDLINE)</h2>
            <p>+91 7532987249</p>
            <p>+91 8487346732</p>
        </div>
        <div className='con7'>
            <h2>EMAIL ADDRESS</h2>
            <p>infosys@gmail.com
            </p>
        </div>
        </div>
        </div>
    </div>
  )
}
