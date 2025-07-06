import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Pages/Hero'
import Info from './Pages/Info'
import TechInfo from './Pages/techInfo';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <div>
          <Hero />
          <Info />
          <TechInfo />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-center p-4 bg-gray-100">
          <p className="text-lg font-semibold text-gray-700">
            🚫 This site is only available on desktop devices.<br />
            Please use a screen size of <strong>768px or wider</strong>.
          </p>
          
        </div>
      )}
    </>
  );
}

export default App;
