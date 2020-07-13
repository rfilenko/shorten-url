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
      <p className="mb-4 md:mb-0 truncate">{original}</p>
      <span className="text-teal-400">
        {shortened}

        <button
          onClick={handleCopy}
          className={`btn ml-4 rounded py-2 px-6 ${
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
