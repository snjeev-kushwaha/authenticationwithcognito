import React from 'react'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import PremiumPage from './pages/PremiumPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/premium' element={<PremiumPage />} />
      </Routes>
    </div>
  );
}

export default App;
