import React from 'react';

const FormInput = () => {
  return (
    <>
      <section className="relative -mb-24 form-input">
        <div className="container p-4 mx-auto max-w-screen-dt">
          <form className="w-full px-10 py-12 text-sm rounded-lg lg:flex lg:justify-between lg:items-center">
            <input
              type="text"
              placeholder="Shorten a link here"
              className="w-full p-3 mb-8 border border-gray-300 rounded-md h-14 lg:mb-0"
            />
            <button className="w-full px-8 py-3 text-xl font-bold text-white transition duration-300 ease-in-out bg-teal-400 rounded-md md:w-1/4 h-14 lg:px-5 lg:ml-4 hover:bg-teal-600">
              Shorten It!
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default FormInput;
