import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import HomeData from './pages/HomeData';
import Cricket from './pages/Cricket';
import Football from './pages/Football';
import Volleyball from './pages/Volleyball';
import Tennis from './pages/Tennis';

function App() {
  const homeRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <BrowserRouter>
        {/* Always visible */}
        <Navbar homeRef={homeRef} footerRef={footerRef} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={homeRef}>
                  <HomeData />
                </div>
                {/* You can include TournamentIntro or SportsCards here if needed */}
                <div ref={footerRef}>
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/football" element={<Football />} />
          <Route path="/volleyball" element={<Volleyball />} />
          <Route path="/tennis" element={<Tennis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
