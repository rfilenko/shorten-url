import React, { useState } from 'react';
import axios from 'axios';

import UrlItem from './UrlItem';

const FormInput = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const formHandler = (evt) => {
    evt.preventDefault();

    if (query === '') {
      setError(true);
    } else {
      setError(false);

      axios.post('https://rel.ink/api/links/', { url: query }).then((res) => {
        const newResult = {
          original: query,
          shortened: 'https://rel.ink/' + res.data.hashid,
          hashid: res.data.hashid,
        };

        setResults([...results, newResult]);
      });

      setQuery('');
    }
  };

  return (
    <>
      <section className="relative px-8 -mb-24 form-input">
        <div className="container py-4 mx-auto max-w-screen-dt">
          <form
            onSubmit={(e) => formHandler(e)}
            className="w-full px-5 lg:px-10 py-6 lg:py-12 text-sm bg-purple-600 bg-center
            bg-cover rounded-lg lg:flex lg:justify-between lg:items-center"
          >
            <div className="w-full relative flex flex-col mb-8 lg:mb-0 ">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={query}
                onChange={(e) => changeHandler(e)}
                className={`w-full p-3 border-2 rounded-md h-14 
                ${error ? 'border-red-500' : 'border-gray-300'}`}
              />
              {error && (
                <p className="absolute text-red-500 error-msg">
                  Please add a link
                </p>
              )}
            </div>
            <button className="px-4 py-3 text-xl font-bold text-white transition duration-300 ease-in-out bg-teal-400 rounded-md w-full md:w-1/4 h-14 lg:px-5 lg:ml-4 hover:bg-teal-600">
              Shorten It!
            </button>
          </form>
          {results.length === 0 ? null : (
            <div className="shorten__results">
              {results.map((result, idx) => (
                <UrlItem result={result} key={result.hashid + idx} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FormInput;
