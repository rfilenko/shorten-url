import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container p-8 lg:p-32 max-w-screen-dt">
          <div className="flex flex-col items-center lg:w-6/12 w-full">
            <h1 className="max-w-lg mb-2 text-5xl font-bold leading-tight">
              More than just shorter links
            </h1>
            <p className="max-w-md mb-6 text-purple-400">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="/" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
