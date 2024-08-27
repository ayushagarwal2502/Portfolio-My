import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import {Stack} from 'react-bootstrap';
import image1 from './Images/Ayush.jpeg';
import './css/menubar.css';
import setBodyColor from './../setBodyColor';
import {NavLink}  from 'react-router-dom';

const MenuBar = () => {
 const[state,setState]=useState({
  width:" ",
  height:" "
 })
  const inMouse=()=>{
    setState({width:84,height:84})
  }
  const outMouse=()=>{
    setState({width:" ",height:" "})
  }

   setBodyColor({color: "#FFFFFF"});

  return ( 
    <div className='animate__animated animate__fadeInDown'>
    <div className='menubar' >
         <Stack direction="horizontal" gap={4}>
          <h1> </h1> 
          <Avatar alt="GeeksforGeeks Pic 1"
              src={image1} onMouseEnter={inMouse} onMouseLeave={outMouse} style={state}></Avatar>
        <h1>AYUSH AGARWAL</h1>
             <div className="p-2 ms-auto"></div>
             <div className='menubarContent'>
             <nav id="sidebar">
                  <Stack direction="horizontal" gap={5}>
                  <NavLink  to='/' >home</NavLink>
                  <NavLink  to='/about'>about</NavLink>
                  
                  <NavLink to='/projects'>projects</NavLink> 
                  
                  <NavLink  to='/contact'>contact</NavLink>
                
                 </Stack>
                 </nav>
                 </div>
         </Stack>
      </div>
    
    </div>
  )
}

export default MenuBar
