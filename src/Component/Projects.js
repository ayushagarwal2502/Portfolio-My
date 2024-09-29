import React,{useState} from 'react' ;
import MenuBar from './MenuBar' ;
import { Stack } from 'react-bootstrap';
import './css/projects.css' ;
import image from './Images/ayushpics.jpg' ;  
import project1 from './Images/projects/quora.jpg' ;
import project2 from './Images/projects/todoimage.webp';  
import project3  from './Images/projects/clothimage.webp';
import project4  from './Images/projects/hotelimage.jpg';
import project5  from './Images/projects/videoChatimage.jpg';
import project6  from './Images/projects/whiteboardimage.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'animate.css';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
 const navigate=useNavigate();
 const proje=()=>
  {
    navigate('/shinewithcloth-frontend.onrender.com')
  
  }

  const [state, setState] = useState({
    boxShadow:" ",
    maxWidth: " ",
    transition:" ",
  });
  const styles={
    boxShadow:" ",
    maxWidth: " ",
    transition:" ",
  }
  const opacities={
    opacity:0,
    color:"white"
  }
  const[opacity,setOpacity]=useState({
    opacity:0,
    color:"white"
  });
  const [hoverIndex, setHoverIndex] = useState(-1);
  const outMouse=()=>{
    setHoverIndex(-1);
    setState({  boxShadow:"" });
    setOpacity({opacity:0,color:"white"}); 

  }
  const inMouse=(index)=>{
    setHoverIndex(index);
    setOpacity({opacity:0.7,color:"lightgray"});
    setState({ boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.19)",maxWidth:330,transition:"1s"});
   
  }
  return (
    <div className='portfolio'>
      <MenuBar />
      <div className='project'>
        <Stack direction="horizontal" gap={0}>
          <div className='animate__animated animate__bounceInLeft'>
            <h2>Portfolio.</h2>
            <h4>Check out my latest projects.</h4>
            <p>I've worked at start-ups, tech companies and <br></br>corporates on a range of different projects, including <br></br> design systems, websites and apps.</p>
          </div>
          <div className='p-2 ms-auto'></div>
          <div className="animate__animated animate__bounceInRight">
           <img src={image} alt=" "  width={500} height={400}></img>
          </div>
        </Stack>
        </div>
        <div className='projectPage2'> 
          <div className='projectPage2Content' >
          <Stack direction='horizontal' gap={4}>
          <div className='projectImage' onClick={proje} onMouseEnter={()=>inMouse(0)} onMouseLeave={outMouse} style={hoverIndex===0 ? state:styles} >
            <img src={project1} alt=" " id="imageProject"  style={{paddingRight:"40px"}}></img>
            <p>Know the Best Answer <br></br> website  <ArrowForwardIosIcon id="arrow" style={hoverIndex===0? opacity:opacities} /></p>
          </div>
          <div className='projectImage' onMouseEnter={()=>inMouse(1)} onMouseLeave={outMouse} style={hoverIndex===1 ? state:styles} >
            <img src={project2} alt=" " id="imageProject"  style={{paddingLeft:"40px"}}></img>
            <p >Make Your Notes <br></br> website <ArrowForwardIosIcon id="arrow" style={hoverIndex===1 ? opacity:opacities} /> </p>
          </div>
          </Stack>
          </div>
          <div className='projectPage2Content'>
          <Stack direction='horizontal' gap={4}>
          <div className='projectImage' onMouseEnter={()=>inMouse(3)} onMouseLeave={outMouse} style={hoverIndex===3 ? state:styles} >
            <img src={project3} alt=" " id="imageProject"  style={{paddingRight:"40px"}}></img>
            <p >Your own wardrobe <br></br> website  <ArrowForwardIosIcon id="arrow" style={hoverIndex===3? opacity:opacities} /></p>
          </div>
          <div className='projectImage' onMouseEnter={()=>inMouse(4)} onMouseLeave={outMouse} style={hoverIndex===4 ? state:styles}>
            <img src={project4} alt=" " id="imageProject"  style={{paddingLeft:"40px"}}></img>
            <p>Rethinking Hotel Booking <br></br> website <ArrowForwardIosIcon id="arrow" style={hoverIndex===4 ? opacity:opacities}/> </p>
          </div>
          </Stack>
          </div>
          <div className='projectPage2Content'>
          <Stack direction='horizontal' gap={4}>
          <div className='projectImage'onMouseEnter={()=>inMouse(5)} onMouseLeave={outMouse} style={hoverIndex===5 ? state:styles}>
            <img src={project5} alt=" " id="imageProject" style={{paddingRight:"40px"}}></img>
            <p>Video chat with anyone  <br></br> website  <ArrowForwardIosIcon id="arrow" style={hoverIndex===5? opacity:opacities} /></p>
          </div>
          <div className='projectImage' onMouseEnter={()=>inMouse(6)} onMouseLeave={outMouse} style={hoverIndex===6 ? state:styles}>
            <img src={project6} alt=" " id="imageProject"  style={{paddingLeft:"40px"}}></img>
            <p>Draw your Design <br></br> website <ArrowForwardIosIcon id="arrow" style={hoverIndex===6 ? opacity:opacities}/> </p>
          </div>
          </Stack>
          </div>
        </div>
  
    </div>
  )
}

export default Projects
