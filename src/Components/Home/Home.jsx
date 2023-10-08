import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import image from '../../assets/vizag_steel_plant.jpg'
import { useTypewriter,Cursor } from "react-simple-typewriter";
const Home = () => {
    const[text]=useTypewriter({
        words : ['Visakhapatnam Steel Plant is the integrated steel plants of Rashtriya Ispat Nigam Limited in Visakhapatnam. Founded in 1982, the plant focuses on producing value-added steel, producing 5.773 million tonnes of hot metal, 5.272 million tonnes of crude steel and 5.138 million tonnes of saleable steel in the 2021-2022 financial year. According to the India Daily Times, the plant is expected to skyrocket in terms of production in the nearest future.','Vizag Steel Plant is the only Indian shore-based steel plant and is situated on 33,000 acres (13,000 ha), and is poised to expand to produce up to 20 MT in a single campus. Turnover in 2011-2012 was Rs 14,457 crores. On 20 May 2009, Prime Minister Manmohan Singh launched the expansion project of Visakhapatnam Steel Plant from a capacity of 3.6 MT to 6.3 MT at a cost of Rs. 8,692 crores.','The expansion project is expected to become functional by 2012.[3] Currently, the steel plant has completed the expansion from 3.6 MT to 6.3 MT with a total investment of Rs.12,300 crore. The company has planned to expand its production capacity further by one more MT which requires an investment of Rs.4,500 crore',],
        loop:{},
        typeSpeed:120,
        delaySpeed:80,
      })  
  return (
     
    <div className='container-box'>
        <div className='left'>
            <img src={image} alt='vizag_steel_plant'/>
            <div className="content">
            
            <p>{text}
            <span style={{color:'#fff'}}> <Cursor cursorStyle="|"/> </span>
            </p>
            
            </div>
        </div>
        <div className='right'>
        <div className="section">
            <div className="container">
                <div className=" full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-1">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                             <h6 className="mb-0 pd-0 "><span>Admin Log In</span><span>Admin Registration </span></h6>
                             <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                             <label for="reg-log"></label>
                             <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemial" autocomplete="off"/>
                                                    <i class="input-icon  uil uil-at"></i>
                                                    
                                                </div>
                                                <div className="form-group mt-2">
                                                    <i className="input-icon uil uil-lock-alt">
                                                    <input type="password" name="logpass" class="form-style" placeholder="Your password" id="logpass" autocomplete="off"/>
                                                    </i>
                                                </div>
                                                <NavLink href="#" className="btn mt-4">Submit</NavLink>
                                                <p className="mb-0 mt-4 text-center"><NavLink href="#0" class="link">Forgot your password?</NavLink></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Register</h4>
                                                
                                                <div className="form-group ">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your email" id="logemail" autocomplete="off"/>
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2 ">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your password" id="logpass" autocomplete="off"/>
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <NavLink href="#" className="btn mt-4">Submit</NavLink>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        <script src="logoin.js"></script>
        </div>
    </div>
  )
}

export default Home