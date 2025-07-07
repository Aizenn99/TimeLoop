import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Pages/Hero'
import Info from './Pages/Info'
import TechInfo from './Pages/techInfo';
import Githubcontri from './Pages/Githubcontri';
import Contact from './Pages/contact';

function App() {
  

  return (
    <>
      
        <div>
          <Hero />
          <Info />
          <TechInfo />
          <Githubcontri />
          <Contact />
        </div>
    
    </>
  );
}

export default App;
