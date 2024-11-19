// components/DorkItem.tsx
import React from 'react';

interface DorkItemProps {
  dork: string;
  domain: string;
}

const DorkItem: React.FC<DorkItemProps> = ({ dork, domain }) => {
  const modifiedDork = dork.replace('example.com', domain);

  return (
    <li className="dork-item mb-2">
      <a
        href={`https://www.google.com/search?q=${encodeURIComponent(modifiedDork)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {modifiedDork}
      </a>
    </li>
  );
};

export default DorkItem;
