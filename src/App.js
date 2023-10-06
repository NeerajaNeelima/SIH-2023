import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/sidebar/sidebar';
import CustomTabPanel from './Components/maincomponent/CustomTabPanel';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='maindiv'>
        <Sidebar />
        <CustomTabPanel />
      </div>
    </BrowserRouter>
  );
}

export default App;
