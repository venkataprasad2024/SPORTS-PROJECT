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
function App() {
 
  return (
    <>
     
    <Navbar />
    <TournamentIntro />
    <Home />
    {/* <SportsCards /> */}
    <Cricket />
    <MatchesCountUp />
    {/* <Football />
    <Volleyball /> 
<Tennis />   */}
  <Footer /> 
      </>)}
  export default App;