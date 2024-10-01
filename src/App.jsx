import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import About from './pages/About';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import EventsPage from './pages/EventsPage';
import { MouseFollower } from 'react-mouse-follower';
import Cursor from '@christian-martins/react-cursor-follow';



function App() {
 

  return (
    <Router>
      
      <Cursor 
	pulse
	color="#144c8b"
	duration={0.4}
	size={10}
  easing="	cubic-bezier(0.18, 0.89, 0.32, 1.28)"
	
  />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/events' element={<EventsPage />} />
      </Routes>
     
    </ Router>
  
  )
}

export default App
