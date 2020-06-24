import React from 'react';
import HeroSection from './components/HeroSection';
import './styles/app.css';

function App() {
  return (
    <>
      <p className="p-6 my-4 font-bold text-center text-teal-400 bg-gray-100">
        Url shortner with Tailwind css
      </p>
      <HeroSection />
    </>
  );
}

export default App;
