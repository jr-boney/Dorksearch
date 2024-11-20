import React from 'react';
import './globals.css'; // Import global styles (Tailwind, custom CSS)
import Link from 'next/link';

export default function Layout({
  children, // This represents the content of your page
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>dorku</title>
        <meta name="description" content="A collection of Google Dorks for Bug Bounty" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-100 text-gray-900 flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">dorku</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-200 transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-200 transition-colors">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-1 container mx-auto p-6">
          {/* This is where the content of each individual page will be rendered */}
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 <Link target='blank' href="https://www.linkedin.com/in/aswin-krishna-344064202/" className="hover:text-gray-400 transition-colors">Aswin Krishna</Link> | <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
