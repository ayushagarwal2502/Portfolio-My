import React from 'react'
import MenuBar from './MenuBar'
import image3 from './Images/codingimage.jpeg';
import './css/home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
        const navigate=useNavigate();
  const changes=()=>{ 
     navigate('/game-Tic-Tac-Toe');
  }
  return (
    <div>
      <MenuBar/>
      <div className='home'>
      <h3>{"< Coder >"}</h3>
      <p> Full-stack web developer Who writes clean elegance and efficient code .</p>
       <img src={image3} alt="djcn" width={900} height={400} className='animate__animated animate__zoomIn'></img>
      </div>
      <div className='homePage'>
       <button onClick={changes}>Click ME TO SEE SOME CHANGES</button>
      </div>
      </div>
  )
}

export default Home
