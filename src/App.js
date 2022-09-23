import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ContactContainer from './components/ContactContainer/ContactContainer'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import TicketsCartContainer from './components/TicketsCartContainer/TicketsCartContainer';
import CoasterDetailContainer from './components/CoasterDetailContainer/CoasterDetailContainer';
import UseTicketsContext from './context/TicketsContext';


function App() {
  return (
    
    <Router>
      <UseTicketsContext>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/coasters/:id' element={<CoasterDetailContainer/>}/>
            <Route exact path='/cart' element={<TicketsCartContainer/>}/>
            <Route exact path='/contact' element={<ContactContainer/>}/>
            <Route exact path='/about' element={<AboutUs/>}/>
          </Routes>
        </div>
        </UseTicketsContext>
    </Router>
    
  );
}

export default App;
