// pages/blogs.tsx

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Blogs() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-12">Welcome to Blogs!</h1>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">
                <a href="#">
                  Understanding Web Development Trends in 2024
                </a>
              </h3>
              <p className="text-muted text-sm mb-4 text-black">August 27, 2024</p>
              <p className="text-justify mb-4 text-black">I made this portfolio website to showcase my skills and projects...</p>
              <a href="#" className="btn btn-primary inline-block bg-blue-600 py-2 px-4 rounded-full">
                Read More
              </a>
            </div>
          </div>
          {/* Add more blog posts here using the same structure */}
        </div>
      </section>
      <Footer />
    </div>
  );
}
