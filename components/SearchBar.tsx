// components/SearchBar.tsx
import { useState } from 'react';

interface SearchBarProps {
  onDomainChange: (domain: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onDomainChange }) => {
  const [domain, setDomain] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDomain(e.target.value);
    onDomainChange(e.target.value);
  };

  return (
    <div className="search-container mb-4">
      <label htmlFor="domainInput" className="block text-lg font-semibold mb-2">
        Enter a domain:
      </label>
      <input
        type="text"
        id="domainInput"
        value={domain}
        onChange={handleChange}
        placeholder="example.com"
        className="w-full p-3 border rounded-lg shadow-md"
      />
    </div>
  );
};

export default SearchBar;
