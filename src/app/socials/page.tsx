// pages/socials.tsx

export default function Socials() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Connect with Me on Social Media</h1>
        <p className="text-lg mb-12">You can find me on various platforms. Feel free to follow, connect, or reach out!</p>

        {/* Social Media Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a
              href="https://x.com/SamaMaou67248"
              className="btn btn-info btn-lg bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter mr-2"></i> X (Twitter)
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/piyush-kumar-4199a5202/"
              className="btn btn-primary btn-lg bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-800 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>

          <div>
            <a
              href="https://github.com/ipiyushkumar"
              className="btn btn-dark btn-lg bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github mr-2"></i> GitHub
            </a>
          </div>

          <div>
            <a
              href="https://www.instagram.com/ipiyushkumar001/"
              className="btn btn-danger btn-lg bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-700 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram mr-2"></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
