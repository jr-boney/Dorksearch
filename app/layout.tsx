// app/layout.tsx
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
        <title>Google Dorks for Bug Bounty</title>
        <meta name="description" content="A collection of Google Dorks for Bug Bounty" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold">Google Dorks for Bug Bounty</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
          {/* This is where the content of each individual page will be rendered */}
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Aswin krishna | <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
