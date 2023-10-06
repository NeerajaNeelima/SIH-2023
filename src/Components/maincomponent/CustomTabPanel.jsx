import { Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { createTheme } from '@mui/material';
import { useState } from 'react';
import './maincomponent.css'
import map from '../../assets/map.png'
const CustomTabPanel = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event:React.SyntheticEvent,newValue:string) => {
    setValue(newValue);
  };
  const theme = createTheme();

  theme.spacing(2); // `${8 * 2}px` = '16px'
  
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList aria-label="Tabs example" onChange={handleChange} textColor="primary">
  <Tab
    label="Visual Representation"
    value="1"
    sx={{ marginRight: theme.spacing(20) }} // Adjust the spacing as needed
  />
  <Tab label="L->S & S-> l" value="2" sx={{ marginRight: theme.spacing(20) }} />
  <Tab label="ALl TAT , CT , LT" value="3" sx={{ marginRight: theme.spacing(20) }} />
  <Tab label="History of ladle" value="4" sx={{ marginRight: theme.spacing(20) }} />
</TabList>


        </Box>
        
        <TabPanel value="1" className='tab'><img src={map} width='1100rem' height='550rem' style={{marginLeft:'-2rem',padding:'0px'}} /></TabPanel>
        <TabPanel value="2"  className='tab'>

          <p>Ladle No. or Station No.</p>
          <div className='querybox'>
            <input type='text' placeholder='     Ladle Number or Station Number' /><br/>
            <button> Search</button>
          </div> 
          <p className='output' style={{}}>
          <b >FURNACE 1</b>
          </p> 
          <table>
            <tr>
              <th>Ladle Type</th>
              <th>Ladle Number</th>
              <th>position</th>
              <th>Time stamp</th>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
            </tr>
          </table>

        </TabPanel>
        <TabPanel value="3"  className='tab'>

        <table style={{marginLeft:'0px'}}>
            <tr>
              <th>Ladle Type</th>
              <th>Ladle Number</th>
              <th>position</th>
              <th>Time stamp</th>
              <th>TAT</th>
              <th>CT</th>
              <th>LT</th>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Hot metal ladle</td>
              <td>H5</td>
              <td>FURNACE 1 </td>
              <td>23:15:06 7th October 2023 </td>
              <td>150</td>
              <td>4</td>
              <td>8</td>
            </tr>
          </table>
        </TabPanel>
        <TabPanel value="4"  className='tab'>Panel Four</TabPanel>
      </TabContext>
    </Box>
  );
};

export default CustomTabPanel;

/*import {Box,Tab,Table} from '@mui/material'
import {TabContext , TabList, TabPanel} from '@mui/lab'
import React,{ useState } from 'react'
const CustomTabPanel = ()=>{

  const [value,setValue]=useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string)=>{

    setValue(newValue);
  }
  return (
  <Box>
    <TabContext>
      <Box sx={ {borderBottom: 1, borderColor:'divider'}}>
        <TabList aria-label='Tabs example' onChange={handleChange}>
          <Tab label='Tab One' value='1' />
          <Tab label='Tab Two' value='2' />
          <Tab label='Tab Three' value='3' />
          <Tab label='Tab  Four' value='4' />
        </TabList>
      </Box>
      <TabPanel value='1'>Panel One</TabPanel>
      <TabPanel value='2'>Panel Two</TabPanel>
      <TabPanel value='3'>Panel Three</TabPanel>
      <TabPanel value='4'>Panel Four</TabPanel>
    </TabContext>
  </Box>
  )
}
export default CustomTabPanel;*/
