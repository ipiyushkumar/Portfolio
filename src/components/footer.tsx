export default function Footer () {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-dark text-white py-6 mt-8 text-center">
        <div className="container">
          <p>&copy; 2024 Piyush Kumar. All Rights Reserved.</p>
          <div className="footer-links space-x-4 mb-3">
            <a href="/" className="text-white hover:underline">
              Home
            </a>
            <a href="/about" className="text-white hover:underline">
              About
            </a>
            <a href="/blogs" className="text-white hover:underline">
              Blog
            </a>
            <a href="/contact" className="text-white hover:underline">
              Contact
            </a>
          </div>

          <div className="social-links space-x-4">
            <a href="https://www.facebook.com/ipiyushkumar001/" target="_blank" className="text-white">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://x.com/SamaMaou67248" target="_blank" className="text-white">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/piyush-kumar-4199a5202/" target="_blank" className="text-white">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ipiyushkumar001/" target="_blank" className="text-white">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}