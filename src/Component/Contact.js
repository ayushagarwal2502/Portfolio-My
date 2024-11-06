import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MenuBar from './MenuBar';
import './css/contact.css';
import { Stack } from 'react-bootstrap';
import image2 from './Images/coding.jpeg';

const Contact = () => {
  const form = useRef();
  const[value1,setValue1]=useState('');
  const[value2,setValue2]=useState('');
  const[value3,setValue3]=useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dc3vn7n', 'template_i8sy0en', form.current, {
        publicKey: '6AI3Vmubqv9EUrId_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
      ).catch(()=>{
        console.log("error");
      })
      setValue1('');
      setValue2('');
      setValue3('');

  };
  return (
    <div className='contact'>
      <div>
      <MenuBar />
      </div>
      <Stack direction='horizontal' gap={2}>
      <div className='animate__animated animate__bounceInLeft'>
      <h3>contact.</h3>
      <p>Get in touch with me via email.</p>
      <p><b>Email:-ayushagarwal2502@gmail.com</b></p>
      </div>
      <div className="p-2 ms-auto"></div>
      <div className='animate__animated animate__bounceInRight'>
        <img src={image2} alt=" " width="950" height="500" style={{paddingTop:"80px" ,paddingRight:"220px"}}></img>
      </div>
      </Stack>
      <div className='textbox'>
        <p>Send me an email</p>
        <form ref={form}> 
        <div className='Grid-container'>
        <label>Name</label>
        <input className='Grid' type="text" placeholder='' name="user_name"  value={value1} onChange={(e)=>{setValue1(e.target.value)}}/>
        <label>Email</label>
        <input className='Grid' type="email" placeholder='' name="user_email"  value={value2} onChange={(e)=>{setValue2(e.target.value)}}/> 
        <label>Message</label>
        <textarea className='Grid' name="message"  value={value3} onChange={(e)=>{setValue3(e.target.value)}}></textarea>
         </div>
         <br></br>
         <button style={{backgroundColor:"black",color:"white",marginLeft:"750px"}} onClick={sendEmail}>Send email</button>
         </form>
      </div>
    </div>
  )
}

export default Contact
