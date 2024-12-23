import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-dark text-white py-6 mt-8 text-center">
        <div className="container">
          <p>&copy; 2024 Piyush Kumar. All Rights Reserved.</p>
          <div className="footer-links space-x-4 mb-3">
            <Link href="/" passHref className="text-white hover:underline">
              Home
            </Link>
            <Link href="/about" passHref className="text-white hover:underline">
              About
            </Link>
            <Link href="/blogs" passHref className="text-white hover:underline">
              Blog
            </Link>
            <Link href="/contact" passHref className="text-white hover:underline">
              Contact
            </Link>
          </div>

          <div className="social-links space-x-4">
            <Link href="https://www.facebook.com/ipiyushkumar001/" target="_blank" className="text-white">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="https://x.com/SamaMaou67248" target="_blank" className="text-white">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link href="https://www.linkedin.com/in/piyush-kumar-4199a5202/" target="_blank" className="text-white">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link href="https://www.instagram.com/ipiyushkumar001/" target="_blank" className="text-white">
              <i className="fa fa-instagram"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
