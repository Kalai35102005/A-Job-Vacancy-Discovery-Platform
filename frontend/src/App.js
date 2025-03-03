// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import Home from './Home'
import {Route,Routes,Router} from 'react-router-dom'
import Signup from './Signup'
 import Login from './Login'
 import Contactus from './Contactus'
 import Aboutus from './Aboutus'
 import Jobseekers from './Jobseekers'
 import Hcl from './Hcl'
 import Cts from './Cts'
 import Microsoft from './Microsoft'
 import Jobdetails from './Jobdetails'
// import Auth from '.Auth'
 function App() {
  return (
   
    <div className='App'>
      <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/Signup' element={<Signup/>}/> 
          <Route path='/Login' element={<Login/>}/>    
        {/* <Route path='/Auth' element={<Auth/>}/>  */}
       <Route path='/Contactus' element={<Contactus/>}/> 
       <Route path='/Aboutus' element={<Aboutus/>}/> 
       <Route path='/Jobseekers' element={<Jobseekers/>}/> 
       <Route path='/Cts' element={<Cts/>}/> 
       <Route path='/Hcl' element={<Hcl/>}/> 
       <Route path='/Microsoft' element={<Microsoft/>}/> 
       <Route path='/Jobdetails' element={<Jobdetails/>}/> 
      </Routes>
    </div>
   
  )
}
export default App