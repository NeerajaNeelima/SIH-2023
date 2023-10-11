import { Box, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { createTheme } from '@mui/material';

import SMS2 from '../../assets/SMS2.jpg'
import Legend from '../Legend/Legend.jsx';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import './maincomponent.css'
import lmf1 from '../../assets/lmf1.png'
import hrm from '../../assets/hrm.jpg'
import ladle_furnace from '../../assets/ladle_furnace.jpg'
import ladle_prep_bay from '../../assets/ladle_prep_bay.jpg'
import slag_pot from '../../assets/slag_pot.jpg'
import tempod_can from '../../assets/tempod_can.jpg'
import furnace from '../../assets/furnace.jpg'
import ccm from '../../assets/ccm.jpg'
import ladle_car from '../../assets/ladle_car.jpg'
import arm from '../../assets/arm.jpg'

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CustomTabPanel = () => {
  const [value, setValue] = useState('1');
  
  const [dvalue,setDvalue]=useState('5')
  const [selectedValue, setSelectedValue] = useState(''); 

  const handleSelect = (event) => {
    setSelectedValue(event.target.value); 
  };

  const handleChange = (event:React.SyntheticEvent,newValue:string) => {
    setValue(newValue);
   
  };
  const handleChangetab = (event:React.SyntheticEvent,newValue:string) => {
    setDvalue(newValue);
   
  };
  const theme = createTheme({
    palette: {
      
      secondary:{main: '#FF5733'},
    },
  });

  theme.spacing(2); // `${8 * 2}px` = '16px'
  
  return (
    <>
    <Box>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 2, borderColor: 'divider'}}>
        <TabList aria-label="Tabs example" onChange={handleChange} textColor="primary" >
          
          <Tab
            label="Real-time Ladle Tracking"
            value="1"
            sx={{ marginRight: theme.spacing(3)}} 
          />
          <Tab label="Ladle or Station Lookup" value="2" sx={{ marginRight: theme.spacing(3)}} />
          <Tab label="Comprehensive Ladle InformationT" value="3" sx={{ marginRight: theme.spacing(3)}} />
          <Tab label="Ladle Trajectory Summary" value="4" sx={{ marginRight: theme.spacing(3)}} />
          
       
</TabList>


        </Box>
        <TabContext value={dvalue} >

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {value === '1' && (
            <>
            <TabList aria-label="Tabs example" textColor="primary" onChange={handleChangetab}>
                <Tab label="SMS1" value="5" sx={{ marginLeft: theme.spacing(50.5) }} />
                <Tab label="SMS2" value="6" sx={{ marginLeft: theme.spacing(10) }} />
              </TabList>
               <TabPanel value="5" className="tab">
               <div className='map'>
                  <img src={lmf1} alt='ladle' className='blue_print' width={'1070rem'} height={'650px'}/>
                  <img src={slag_pot} alt='slag_pot' width={'50px'} height={'30px'} style={{position: 'absolute',top:'1.7rem',left:'4.5rem'}} className='slag_pot' />
                  <img src={slag_pot} alt='slag_pot' width={'50px'} height={'30px'} style={{position: 'absolute',top:'1.7rem',left:'12rem'}} className='slag_pot'/>
                  <img src={slag_pot} alt='slag_pot' width={'50px'} height={'30px'} style={{position: 'absolute',top:'1.7rem',left:'20rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'70px'} height={'30px'} style={{position: 'absolute',top:'7.7rem',left:'31.2rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'60px'} height={'30px'} style={{position: 'absolute',top:'7.7rem',left:'44rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'60px'} height={'30px'} style={{position: 'absolute',top:'7.7rem',left:'55.5rem'}} className='slag_pot'/>
                  <img src={tempod_can} alt='slag_pot' width={'70px'} height={'34px'} style={{position: 'absolute',top:'15.6rem',left:'11.2rem'}} className='slag_pot'/>
                  <img src={ladle_furnace} alt='slag_pot' width={'70px'} height={'40px'} style={{position: 'absolute',top:'17.5rem',left:'31.2rem'}} className='slag_pot'/>
                  <img src={ladle_furnace} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'18rem',left:'44rem'}} className='slag_pot'/>
                  <img src={ladle_furnace} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'18rem',left:'55.5rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'70px'} height={'40px'} style={{position: 'absolute',top:'24.5rem',left:'31.2rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'70px'} height={'40px'} style={{position: 'absolute',top:'24.5rem',left:'44rem'}} className='slag_pot'/>
                  <img src={ladle_car} alt='slag_pot' width={'70px'} height={'40px'} style={{position: 'absolute',top:'24.5rem',left:'55.5rem'}} className='slag_pot'/>
                  <img src={hrm} alt='slag_pot' width={'70px'} height={'50px'} style={{position: 'absolute',top:'23.5rem',left:'3.3rem'}} className='slag_pot'/>
                  <img src={ladle_prep_bay} alt='slag_pot' width={'70px'} height={'50px'} style={{position: 'absolute',top:'28.5rem',left:'18.3rem'}} className='slag_pot'/>
                  <img src={furnace} alt='slag_pot' width={'70px'} height={'50px'} style={{position: 'absolute',top:'33rem',left:'8rem'}} className='slag_pot'/>
                  <img src={ccm} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'37.5rem',left:'14.4rem'}} className='slag_pot'/>
                  <img src={ccm} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'37.5rem',left:'23.4rem'}} className='slag_pot'/>
                  <img src={ccm} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'37.5rem',left:'31.4rem'}} className='slag_pot'/>
                  <img src={ccm} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'37.5rem',left:'44rem'}} className='slag_pot'/>
                  <img src={ccm} alt='slag_pot' width={'60px'} height={'40px'} style={{position: 'absolute',top:'37.5rem',left:'55rem'}} className='slag_pot'/>
                  <img src={arm} alt='slag_pot' width={'64px'} height={'40px'} style={{position: 'absolute',top:'33.5rem',left:'31.4rem'}} className='slag_pot'/>
                  <img src={arm} alt='slag_pot' width={'64px'} height={'40px'} style={{position: 'absolute',top:'33.5rem',left:'44rem'}} className='slag_pot'/>
                  <img src={arm} alt='slag_pot' width={'64px'} height={'40px'} style={{position: 'absolute',top:'33.5rem',left:'55rem'}} className='slag_pot'/>
               </div>
               
                </TabPanel>
             <TabPanel value="6" className="tab">
             <img src={SMS2} alt='SMS1' width={'1000rem'} height={'450px'}/>
             </TabPanel>
             <Legend />
            </>
              
            )}
          </Box>
           
        </TabContext>
        {/*<TabPanel value="1" className="tab">
          <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
            {value === '1' && (
              <TabList aria-label="Tabs example" textColor="primary" onChange={handleChangetab}>
                <Tab label="SMS1" value="5" sx={{ marginLeft: theme.spacing(40) }} />
                <Tab label="SMS2" value="6" sx={{ marginLeft: theme.spacing(20) }} />
              </TabList>
            )}
            <TabContext value={dvalue}>
           
                <TabPanel value="5" className="tab">
                  <img src={SMS1} alt='SMS1' width={'1000rem'} height={'450px'}/>
                </TabPanel>
                <TabPanel value="6" className="tab">
                <img src={SMS2} alt='SMS1' width={'1000rem'} height={'450px'}/>
                </TabPanel>
              
            </TabContext>
            <Legend />
          </Box>   
            </TabPanel>*/}
        <TabPanel value="2"  className='tab'>
        <div className='location'>
      <div className="form-row">
        <select onChange={handleSelect} value={selectedValue}>
          <option selected value="Select">Select</option>
          <option value="Ladle-no.">Ladle No.</option>
          <option value="Station-no.">Station No.</option>
        </select>

        <div className="input-data">
          <input type="text" required />
          <div className="underline"></div>
          <label for="">Enter Ladle or Station No.</label>
        </div>

        <button className='submit-btn'>Submit</button>
      </div>

      {selectedValue === 'Ladle-no.' ? (
        <p className='output'>FURNACE 1</p>
      ) : null}
      
      {selectedValue === 'Select' ? (
        <p className='output'></p>
      ) : null}

      {selectedValue === 'Station-no.' ? (
        <TableContainer component={Paper} sx={{marginLeft:theme.spacing(-4)}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        
    ) : null}
    {/*<table style={{ marginLeft: '0px' }}>
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
      </table>*/}
  </div>
          {/*<div className='location'>
          <div class="form-row">
            
              <select>
                <option selected disabled>Select</option>
                <option value="Ladle-no.">Ladle No.</option>
                <option value="Station-no.">Station No.</option>
              </select>
            
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Enter Ladle or Station No.</label>
            </div>
            
              <button className='submit-btn'>Submit</button>
            
          </div>
            
             
           
          <p className='output'>
          FURNACE 1
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
          </div>*/}
          

        </TabPanel>
        <TabPanel value="3"  className='tab'>
        <TableContainer component={Paper} sx={{marginLeft:theme.spacing(-3)}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       {/* <table style={{marginLeft:'0px'}}>
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
            </table>*/}
            
        </TabPanel>
        <TabPanel value="4"  className='tab tab4'>
        <div className="form-row">
       

       <div className="input-data">
         <input type="text" required />
         <div className="underline"></div>
         <label for="">Enter Ladle or Station No.</label>
       </div>

       <button className='submit-btn'>Submit</button>
     </div>
     <div className='history_table'>
      <div className='history'>
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator color='success'>
          <TimelineDot  color='success'/>
          <div className="custom-timeline-connector" />
        </TimelineSeparator>
        <TimelineContent>Ladle Preparation Bay</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator color='success'>
          <TimelineDot color='success'/>
          <div className="custom-timeline-connector" />
        </TimelineSeparator>
        <TimelineContent>Furnance 1</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Furnance 2</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Slag yard</TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
    <div className='h_table'>
    <TableContainer component={Paper} sx={{marginLeft:theme.spacing(-3)}}>
        <Table sx={{ maxWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
             
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    
    </div>
        </TabPanel>
      </TabContext>
    </Box>
   
    </>
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
