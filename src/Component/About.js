import React from 'react'
import MenuBar from './MenuBar'
import './css/about.css';
import { Stack } from 'react-bootstrap';
import image4 from './Images/yoda.jpg';
import {Bar,Pie} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const datas={
  labels:['Front-End','Back-End','Data-Structure'],
  datasets:[{
    backgroundColor:['#151515','#949494','#d3d3d3'],
    data:[33.33,33.33,33.33]
  }]
}
const state = {
  labels: ['HTML/CSS', 'Javascript', 'NodeJs',
           'ReactJs', 'MongoDb','ExpressJs','Java'],
  datasets: [
    {
      label:"Language",
      backgroundColor: [
        '#E8D0A9', '#B7AFA3', '#C1DAD6', '#F5FAFA', '#ACD1E9', '#6D929B','#FFE7C7'
      ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [95, 92,90, 95,85,90,70]
    }
  ]
}

const About = () => {
  return (
    <div className='about'>
      <MenuBar/>
      <div >
       <Stack>
       <div className='aboutPage'>
        <h3>about.</h3>
        <br></br>
        <h5>I'm a Full stack Developer</h5>
        <br></br>
        <p>I've enjoyed turning complex problems into simple, beautiful and intuitive designs.</p>
        <p>When I'm not make website, you'll find me cooking, gardening or playing badminton..</p>
       </div>
       </Stack>
       <div className='about2Page'>
        <Stack direction='horizontal' gap={0}>
          <div>
          <Pie
          data={datas}
          >
          </Pie>
          </div>
          <div className='p-2 ms-auto'></div>
          <div>
         <h3>Coder</h3>
         <ul>
          <li>Front-end Developer</li>
          <li>Back-end Developer</li>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>Swearing at my compute</li>
          <li>Eating Pizza</li>
         </ul>
         </div>
         </Stack>
       </div>

       <div className='about3Page'>
       <Stack direction='horizontal' gap={0}>
         <div>
          <img src={image4} alt="nckzjx" width={900} height={500} style={{paddingTop:"50px"}}></img>
         </div>
        <div className='p-2 ms-auto'></div>
        <div id="content1">
        <p>Random facts</p>
        <span>
        I drink a lot of coffee<span ><br></br>
        I'm into interior design</span><br></br>
       <span>Gardening is my zen time</span> <br></br>
        <span>I love to cook (and eat)</span><br></br>
        <span>I'm a bit of a clean freak</span><br></br>
        <span>I'm slightly addicted to Twitter</span><br></br>
       <span>Yoda is my mentor.</span><br></br>
        </span>
        </div>
        </Stack>
       </div>
       <div className='about4Page'>
        <h3 style={{textAlign:"right",paddingRight:"310px"}}>MY SKILLS</h3>
        <div className='barContent'>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:"right"
            }
          }}
        />
      </div>
       </div>
      </div>
    </div>
  )
}

export default About
