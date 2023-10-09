import React from 'react'
import './Legend.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Legend = () => {
  return (
    <div className='legend'>
     <div className='iconflex'>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'orange',fontSize:'33px' }}/>
            <p>Hot Ladel</p>
        </div>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'pink',fontSize:'33px' }}/>
            <p>Steel Ladel</p>
        </div>
        <div className='icon-content'>
            <LocationOnIcon style={{ color: 'brown',fontSize:'33px' }}/>
            <p>Scrap Pot Ladle</p>
        </div>
     </div>
    </div>
  )
}

export default Legend