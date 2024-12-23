// pages/blogs.tsx

import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Blogs() {
  const blogCards = [
    {title: "Understanding Web Development Trends in 2025", link: "/blogs/understanding-web-development-trends-in-2024", date: "January 01, 2024", description: "I made this portfolio website to showcase my skills and projects..."},
  ]
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-12">Welcome to Blogs!</h1>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            {blogCards.map((blog, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-black mb-4">
                  <Link href={blog.link} passHref>
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-muted text-sm mb-4 text-black">{blog.date}</p>
                <p className="text-justify mb-4 text-black">{blog.description}</p>
                <Link href={blog.link} passHref className="btn btn-primary inline-block bg-blue-600 py-2 px-4 rounded-full">
                  Read More
                </Link>
              </div>
            ))}
          </div>
          {/* Add more blog posts here using the same structure */}
        </div>
      </section>
      <Footer />
    </div>
  );
}


/**
 * blog starter template
 */


// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// export default function blog () {
//   return (
//     <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <Navigation />
//         <section className="max-w-7xl mx-auto px-4">
//           this is my first blog
//         </section>
//       <Footer />
//     </div>
//   )
// }