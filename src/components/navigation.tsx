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
    <div className='sticky top-0 z-50 bg-white'>
      {/* Navigation Bar */}
      <nav className='shadow-md px-4 sm:px-10'>
        <div className="px-4 py-3 flex justify-between items-center">
          <Link href="/" passHref className="text-2xl font-bold">
            Piyush Kumar
          </Link>
          {/* Hamburger Menu */}
          <button
            className="sm:hidden px-3 py-2"
            id="navbar-toggle"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 mb-1 bg-deepBlue2"></span>
            <span className="block w-6 h-0.5 mb-1 bg-deepBlue2"></span>
            <span className="block w-6 h-0.5 bg-deepBlue2"></span>
          </button>
          {/* Links for Desktop */}
          <div className="hidden sm:flex space-x-6 justify-center">
            {links.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                passHref
                className="text-lg hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`sm:hidden px-4 py-3 space-y-3 transition-all duration-[1500ms] ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          {links.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              passHref
              className="block text-lg text-primary hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
