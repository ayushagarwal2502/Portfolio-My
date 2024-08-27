import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Home from './Component/Home';
import About from './Component/About';
import GamePage from './Component/GamePage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/game-Tic-Tac-Toe' element={<GamePage/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
