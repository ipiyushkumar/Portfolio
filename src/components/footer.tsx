import Link from 'next/link';

export default function Footer() {
  const pageLinks = [
    {link:"/", name:"Home"},
    {link:"/about", name:"About"},
    {link:"/blogs", name:"Blog"},
    {link:"/contact", name:"COntact"},
  ]

  const socialLinks = [
    {link:"https://www.facebook.com/ipiyushkumar001/", name:"facebook"},
    {link:"https://x.com/SamaMaou67248", name:"X"},
    {link:"https://www.linkedin.com/in/piyush-kumar-4199a5202/", name:"linkedin"},
    {link:"https://www.instagram.com/ipiyushkumar001/", name:"Instagram"},
  ]
  return (
    <div>
      {/* Footer Section */}
      <footer className="py-6 mt-8 text-center bg-gradient-to-b from-deepBlue5 to-deepBlue1 text-white">
        <div className="flex flex-col">
          <p>&copy; 2024 Piyush Kumar. All Rights Reserved.</p>
          <div className="footer-links space-x-4 mb-3">
            {pageLinks.map((link, index) => (
              <Link href={link.link} key={index} passHref className="hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="social-links space-x-4">
            {socialLinks.map((link, index)=> (
              <Link href={link.link} key={index} target="_blank">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}