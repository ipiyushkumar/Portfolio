export default function Navigation () {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold text-primary dark:text-white">
            Piyush Kumar
          </a>
          <button className="sm:hidden px-3 py-2 text-white" id="navbar-toggle">
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          </button>
          <div className="hidden sm:flex space-x-6">
            <a href="/" className="text-lg text-primary dark:text-white hover:underline">
              Home
            </a>
            <a href="/about" className="text-lg text-primary dark:text-white hover:underline">
              About Me
            </a>
            <a href="/services" className="text-lg text-primary dark:text-white hover:underline">
              Services
            </a>
            <a href="/blogs" className="text-lg text-primary dark:text-white hover:underline">
              Blog
            </a>
            <a href="/gallery" className="text-lg text-primary dark:text-white hover:underline">
              Gallery
            </a>
            <a href="/socials" className="text-lg text-primary dark:text-white hover:underline">
              Socials
            </a>
            <a href="/contact" className="text-lg text-primary dark:text-white hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>

  )
}
