import React from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FormInput from './components/FormInput';
import StatisticsSection from './components/StatisticsSection';
import BoostSection from './components/BoostSection';
import Footer from './components/Footer';

import './styles/app.css';

function App() {
  return (
    <>
      {/* <p className="p-6 my-4 font-bold text-center text-teal-400 bg-gray-100">
        Url shortner with Tailwind css
      </p>
      <div className="max-w-screen-sm p-8 mx-auto mb-8 bg-gray-200 rounded">
        <p className="text-teal-400">cyan</p>
        <p className="text-purple-700">violet</p>
        <p className="text-red-500">red</p>
        <p className="text-gray-400">Gray</p>
        <p className="text-purple-400">Grayish Violet</p>
        <p className="text-purple-600">Very Dark Blue</p>
      </div> */}

      <Header />
      <HeroSection />
      <FormInput />
      <StatisticsSection />
      <BoostSection />
      <Footer />
    </>
  );
}

export default App;
