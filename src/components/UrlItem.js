import React, { useState } from 'react';
import copy from 'copy-to-clipboard';

const UrlItem = ({ result }) => {
  const { shortened, original } = result;
  const [copyText, setCopyText] = useState('Copy');
  const handleCopy = () => {
    copy(shortened);
    setCopyText('Copied!');
  };
  return (
    <div className="bg-white border flex flex-wrap items-center justify-between my-4 p-4 rounded text-sm">
      <p className="mb-4 md:mb-0 truncate border-bottom-2">{original}</p>
      <hr className="bg-gray-100 block mb-2 mb-4 w-full md:hidden border-separate" />
      <span className="w-full text-teal-400 flex flex-col md:flex-row md:items-center">
        {shortened}

        <button
          onClick={handleCopy}
          className={`btn mt-4 md:mt-0 md:ml-4 rounded py-2 px-6 ${
            copyText == 'Copied!' ? 'active' : ''
          }`}
        >
          {copyText}
        </button>
      </span>
    </div>
  );
};

export default UrlItem;
