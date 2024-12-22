import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" passHref>
            <a className="text-2xl font-semibold text-primary dark:text-white">
              Piyush Kumar
            </a>
          </Link>
          <button className="sm:hidden px-3 py-2 text-white" id="navbar-toggle">
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          </button>
          <div className="hidden sm:flex space-x-6">
            <Link href="/" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Home
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                About Me
              </a>
            </Link>
            <Link href="/services" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Services
              </a>
            </Link>
            <Link href="/blogs" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Blog
              </a>
            </Link>
            <Link href="/gallery" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Gallery
              </a>
            </Link>
            <Link href="/socials" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Socials
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className="text-lg text-primary dark:text-white hover:underline">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
