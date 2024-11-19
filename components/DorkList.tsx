// components/DorkList.tsx
import React from 'react';

const DorkList = ({ dorks, domain }: { dorks: string[], domain: string }) => {
  // Function to replace the domain placeholder with the actual domain
  const getUpdatedDork = (dork: string, domain: string) => {
    if (domain) {
      // Replace 'example.com' or similar placeholder with the domain
      return dork.replace(/example\.com/gi, domain);
    }
    return dork;
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Selected Dorks</h2>
      <ul className="space-y-4">
        {dorks.map((dork, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(getUpdatedDork(dork, domain))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {getUpdatedDork(dork, domain)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DorkList;
