import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import './App.css'
import Footer from './pages/Footer'
import Navbar from './pages/Navbar'
import TournamentIntro from './pages/TournamentIntro'
import SportsCards from './pages/SportsCards'
 import Cricket from './pages/Cricket'
 import Football from './pages/Football'
 import Volleyball from './pages/Volleyball'
import Tennis from './pages/Tennis'
import MatchesCountUp from './pages/MatchesCountUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeData from './pages/HomeData'
function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>

    <Route path="/" element={<Home/>}>
       <Route path="/" element={<HomeData />} />
       <Route path="/cricket" element={<Cricket />} />
       <Route path="/football" element={<Football />} />
       <Route path="/volleyball" element={<Volleyball />} />
       <Route path="/tennis" element={<Tennis />} />
       </Route>
        </Routes>
     </BrowserRouter>
  
      </>)}
  export default App;