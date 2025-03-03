import React from 'react'
import './Jobdetails.css'
import {useNavigate} from 'react-router-dom'
function Jobdetails() {
    const navigate=useNavigate()
  return (
    <div>
<div className='cd1'>
    <div className='cd2'>
        <h1 className='cdd1'>HCL</h1>
        <button className='n1'onClick={()=>navigate('/hcl')}>See Details</button>
    </div>
    <div className='cd4'>
        <h1 className='cdd1'>CTS</h1>
        <button className='n1'onClick={()=>navigate('/cts')}>See Details</button>
    </div>
    
    <div className='cd3'>
        <h1 className='cdd1'>Microsoft</h1>
        <button className='n1'onClick={()=>navigate('/microsoft')}>See Details</button>
    </div>
</div>
    </div>
  )
}
export default Jobdetails