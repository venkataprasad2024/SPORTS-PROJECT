import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cricket from './Cricket';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
<Navbar/>
<Outlet/>
 
<Footer/>
</div>
  )}
  export default Home;