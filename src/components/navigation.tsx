import Link from 'next/link';

export default function Navigation() {
  const links = [
    {link:"/", name: "Home"},
    {link:"/about", name: "About Me"},
    {link:"/services", name: "Services"},
    {link:"/blogs", name: "Blogs"},
    {link:"/gallery", name: "Gallery"},
    {link:"/socials", name: "Socials"},
    {link:"/contact", name: "Contact"},
  ]
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-black shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" passHref className="text-2xl font-semibold text-primary dark:text-white">
              Piyush Kumar
          </Link>
          <button className="sm:hidden px-3 py-2 text-white" id="navbar-toggle">
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-700 dark:bg-white"></span>
          </button>
          <div className="hidden sm:flex space-x-6">
            {links.map((link, index) => (
              <Link href={link.link} key={index} passHref className="text-lg text-primary dark:text-white hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
