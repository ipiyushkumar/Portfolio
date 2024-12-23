"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About Me" },
    { link: "/services", name: "Services" },
    { link: "/blogs", name: "Blogs" },
    { link: "/gallery", name: "Gallery" },
    { link: "/socials", name: "Socials" },
    { link: "/contact", name: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" passHref className="text-2xl font-semibold text-primary dark:text-white">
            Piyush Kumar
          </Link>
          {/* Hamburger Menu */}
          <button
            className="sm:hidden px-3 py-2 text-white"
            id="navbar-toggle"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          </button>
          {/* Links for Desktop */}
          <div className="hidden sm:flex space-x-6">
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                passHref
                className="text-lg text-primary dark:text-white hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white dark:bg-black px-4 py-3 space-y-3">
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                passHref
                className="block text-lg text-primary dark:text-white hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
