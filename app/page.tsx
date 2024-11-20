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
      'intitle:"index of" inurl:ftp',
      'intitle:"index of" inurl:files',
      'intitle:"index of" "passwords"',
      'intitle:"index of" "usernames"',
      'intitle:"index of" inurl:docs',
      'intitle:"index of" "logs"',
      'intitle:"index of" "database"',
    ],
    sensitiveFiles: [
      'intitle:"index of" ".env"',
      'intitle:"index of" "config.php"',
      'intitle:"index of" "dbdump"',
      'intitle:"index of" "secrets"',
      'intitle:"index of" "private"',
      'intitle:"index of" "key.pem"',
      'intitle:"index of" "id_rsa"',
      'intitle:"index of" "access.log"',
      'intitle:"index of" "error.log"',
      'inurl:"/wp-config.php"',
      'inurl:"/admin/config.php"',
      'inurl:"/server-status"',
      'inurl:"/cacti/graph.php"',
    ],
    exposedDatabases: [
      'intitle:"phpmyadmin" inurl:"index.php"',
      'inurl:".sql" filetype:sql',
      'inurl:"db_backup" filetype:sql',
      'inurl:"backup" filetype:sql',
      'intitle:"index of" "database" "dump"',
      'intitle:"index of" "database" "sql"',
      'inurl:"db" inurl:"backup"',
      'intitle:"index of" "admin" "database"',
      'intitle:"index of" "mongodb"',
      'intitle:"index of" "mysql"',
    ],
    loginPages: [
      'inurl:/login',
      'intitle:"login" inurl:/admin/',
      'intitle:"login" inurl:/signin/',
      'intitle:"login" inurl:/user/',
      'inurl:/admin/login',
      'inurl:/wp-login.php',
      'inurl:/auth/login',
      'intitle:"login" inurl:/account',
    ],
    misconfigurations: [
      'intitle:"Error 404" inurl:/phpinfo',
      'inurl:/robots.txt',
      'inurl:/sitemap.xml',
      'inurl:"/.git/"',
      'inurl:"/.git/config"',
      'inurl:"/.git/HEAD"',
      'inurl:"/.git/refs" "heads"',
      'inurl:"/uploads" "error"',
      'inurl:"/phpmyadmin/"',
      'inurl:"/admin/" "index of"',
    ],
    vulnerableEndpoints: [
      'intitle:"index of" inurl:"/admin/ajax"',
      'inurl:"/admin/config" inurl:"password"',
      'inurl:"/admin/console" inurl:"login"',
      'inurl:"/admin" "portal" "login"',
      'intitle:"admin panel" "dashboard"',
      'inurl:/api/ inurl:"login"',
      'inurl:/wp-admin/admin-ajax.php',
    ],
    sensitiveInfo: [
      'inurl:"/credentials/" intext:"password"',
      'inurl:"/files/" intext:"secret"',
      'intitle:"Index of" "API_KEY"',
      'inurl:"/uploads/" intext:"secret"',
      'inurl:"/private/" intext:"password"',
      'inurl:"/sensitive/" intext:"confidential"',
      'intitle:"index of" "sensitive_data"',
      'inurl:"/data/" intext:"credentials"',
      'intitle:"index of" "admin_pass"',
      'inurl:"/config/" intext:"secret"',
    ],
    cloudMisconfigurations: [
      'inurl:"s3.amazonaws.com" intitle:"index of"',
      'inurl:"s3://" "private"',
      'inurl:"/azure/" "blob"',
      'inurl:"/public/" "cloud"',
      'inurl:"/public/" "data"',
      'inurl:"/gcs/" "storage"',
      'inurl:"cloudfront.net" "file"',
      'intitle:"index of" inurl:"bucket"',
      'intitle:"index of" "AWS"',
      'inurl:"/azureblob/" intext:"private"',
    ],
    openSourceCode: [
      'inurl:"/git/"',
      'intitle:"index of" "GitHub"',
      'inurl:"/repository" "public"',
      'inurl:"/git/repository"',
      'intitle:"index of" "git config"',
      'intitle:"index of" ".git"',
      'inurl:"/src" intext:"password"',
      'inurl:"/docs" intext:"API Key"',
      'intitle:"index of" "source code"',
      'intitle:"index of" "gitlab"',
    ],
    adminInterfaces: [
      'intitle:"admin" "panel"',
      'inurl:"/admin" inurl:"login"',
      'inurl:"/admin" "dashboard"',
      'inurl:"/admin" "index of"',
      'intitle:"admin panel" "login"',
      'intitle:"administrator" inurl:"login"',
      'intitle:"login" "admin panel"',
      'intitle:"admin console" inurl:"login"',
    ],
    vulnerableFiles: [
      'inurl:"/backup/" filetype:sql',
      'inurl:"/backups/" filetype:sql',
      'inurl:"/backups/" filetype:zip',
      'intitle:"index of" "backup.zip"',
      'intitle:"index of" "backup.tar"',
      'inurl:"/database/backup" filetype:sql',
      'inurl:"/backups/db/" filetype:sql',
      'intitle:"index of" "config_backup"',
    ],
    exposedAPIs: [
      'inurl:"/api/v1" "password"',
      'inurl:"/api/v1" "private"',
      'inurl:"/api" "auth"',
      'inurl:"/api/keys/"',
      'inurl:"/api/" "auth_token"',
      'inurl:"/api" "password" filetype:json',
      'inurl:"/api" intext:"api_key"',
      'intitle:"index of" inurl:"/api" "vulnerable"',
      'inurl:"/api/" "client_secret"',
    ],
  };
  
  

  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleDomainChange = (newDomain: string) => {
    setDomain(newDomain);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Google Dorks for Bug Bounty</h1>

      {/* Category Dropdown */}
      <div className="mb-6 max-w-md mx-auto">
        <label htmlFor="category" className="text-lg font-medium text-gray-800 block mb-2">Select a Dork Category:</label>
        <select
          id="category"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {Object.keys(dorksByCategory).map((category) => (
            <option key={category} value={category}>
              {category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </option>
          ))}
        </select>
      </div>

      {/* Domain Search Bar */}
      <SearchBar onDomainChange={handleDomainChange} />

      {/* Dork List with Tooltip */}
      <DorkList dorks={dorksByCategory[selectedCategory]} domain={domain} />
    </div>
  );
};

export default Home;
