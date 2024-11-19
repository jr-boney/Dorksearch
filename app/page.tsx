// app/page.tsx
"use client"; // Mark this file as a client component since it uses React hooks

import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DorkList from '../components/DorkList';
import Tooltip from '../components/Tooltip';

const Home = () => {
  // Set the categories and dorks
  const [domain, setDomain] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('directoryLeaks');

  // Define dorks by category
  const dorksByCategory = {
    directoryLeaks: [
      'intitle:"Index of" "parent directory"',
      'inurl:/admin/',
      'inurl:/backup/',
      'inurl:/uploads/',
      'inurl:/images/',
    ],
    passwordLeaks: [
      'filetype:log inurl:"password"',
      'filetype:txt intext:"username: password:"',
      'intitle:"index of" "passwd"',
      'intitle:"index of" "shadow"',
    ],
    adminPages: [
      'inurl:"/admin/login"',
      'inurl:"/wp-login.php"',
      'inurl:"/admin" intitle:"login"',
      'inurl:"/admin/" intext:"admin"',
    ],
    emailLeaks: [
      'filetype:csv intext:"email"',
      'filetype:csv "email address"',
      'intext:"email" site:linkedin.com',
      'intitle:"index of" "emails"',
    ]
  };

  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleDomainChange = (newDomain: string) => {
    setDomain(newDomain);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Google Dorks for Bug Bounty</h1>

      {/* Category Dropdown */}
      <div className="mb-4">
        <label htmlFor="category" className="text-lg">Select a Dork Category:</label>
        <select
          id="category"
          className="w-full p-2 mt-2 border rounded-md"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="directoryLeaks">Directory Leaks</option>
          <option value="passwordLeaks">Password Leaks</option>
          <option value="adminPages">Admin Page Leaks</option>
          <option value="emailLeaks">Email Leaks</option>
        </select>
      </div>

      <SearchBar onDomainChange={handleDomainChange} />
      <Tooltip />

      {/* Display the selected category's dorks */}
      <DorkList dorks={dorksByCategory[selectedCategory]} domain={domain} />
    </div>
  );
};

export default Home;
