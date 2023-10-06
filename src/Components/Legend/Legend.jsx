import React from 'react'
import './Legend.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Legend = () => {
  return (
    <div className='legend'>
     <div className='iconflex'>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'red',fontSize:'33px' }}/>
            <p>Hotel Ladel</p>
        </div>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'blue',fontSize:'33px' }}/>
            <p>Steel Ladel</p>
        </div>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'grey',fontSize:'33px' }}/>
            <p>Scrap Pot Ladle</p>
        </div>
     </div>
    </div>
  )
}

export default Legend