import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/sidebar/sidebar';
import CustomTabPanel from './Components/maincomponent/CustomTabPanel';
import Legend from './Components/Legend/Legend.jsx'

function App() {
  return (
    
    <BrowserRouter>
     {/*<Home/>
      */} 
      <Navbar />
      <div className='maindiv'>
        <Sidebar />
        <div className='subdiv'>
          <CustomTabPanel />
          
        </div>
        
  </div>
  </BrowserRouter>
  );
}

export default App;
