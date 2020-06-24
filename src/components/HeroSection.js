import React from 'react';
// import iIlustration from '@/images/illustration-working.svg';

const HeroSection = () => {
  return (
    <>
      <div className="max-w-screen-sm p-8 mx-auto mb-8 bg-gray-200 rounded">
        <p className="text-teal-400">cyan</p>
        <p className="text-purple-700">violet</p>
        <p className="text-red-500">red</p>
        <p className="text-gray-400">Gray</p>
        <p className="text-purple-400">Grayish Violet</p>
        <p className="text-purple-600">Very Dark Blue</p>
      </div>
      <section className="hero-section">
        <div className="container p-4 lg:p-40 max-w-screen-dt">
          <div className="w-full lg:w-6/12 ">
            <h1 className="max-w-lg mb-2 text-5xl font-bold leading-tight">
              More than just shorter links
            </h1>
            <p className="max-w-md mb-6 text-purple-400">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a
              href="/"
              className="px-10 py-3 text-sm text-white bg-teal-400 rounded-full hover:bg-teal-800"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
