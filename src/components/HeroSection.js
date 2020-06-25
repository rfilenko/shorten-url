import React from 'react';
// import iIlustration from '@/images/illustration-working.svg';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container p-8 lg:p-40 max-w-screen-dt">
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
              className="px-10 py-3 text-sm text-white transition duration-300 ease-in-out bg-teal-400 rounded-full hover:bg-teal-600"
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
