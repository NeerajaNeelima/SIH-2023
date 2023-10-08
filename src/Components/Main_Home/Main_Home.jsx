import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/sidebar/sidebar';
import CustomTabPanel from './Components/maincomponent/CustomTabPanel';
import Legend from './Components/Legend/Legend.jsx'
const Main_Home = () => {
  return (
    <div>
       <Navbar />
      <div className='maindiv'>
        <Sidebar />
        <div className='subdiv'>
          <CustomTabPanel />
          <Legend/>
        </div>
        
  </div>
    </div>
  )
}

export default Main_Home