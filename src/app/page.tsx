import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />

      {/* Main Section */}
      <div className="container text-center mt-5">
        <h1 className="text-4xl font-bold text-primary dark:text-white">Piyush Kumar</h1>
        <h3 className="text-3xl text-primary dark:text-white">Freelancer</h3>
        <h4 className="text-2xl text-danger">FULL Stack Developer</h4>
        <p className="text-lg mt-4">Hi, I'm Piyush Kumar, a passionate freelancer ready to bring your ideas to life.</p>
      </div>

      {/* Skills Section */}
      <div className="container text-center mt-5">
        <h2 className="text-2xl mb-6">SKILLS</h2>

        {/* Skill 1 */}
        <div className="text-left">
          <h5 className="text-lg">Web Development</h5>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>

        {/* Skill 2 */}
        <div className="text-left mt-6">
          <h5 className="text-lg">Graphic Design</h5>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
        </div>

        {/* Skill 3 */}
        <div className="text-left mt-6">
          <h5 className="text-lg">Digital Marketing</h5>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>

        {/* Skill 4 */}
        <div className="text-left mt-6">
          <h5 className="text-lg">SEO Optimization</h5>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-teal-500 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>

        {/* Skill 5 */}
        <div className="text-left mt-6">
          <h5 className="text-lg">Python Programming</h5>
          <div className="w-full bg-gray-300 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container text-center mt-6">
        <h2 className="text-3xl text-danger">Let's Work Together on Your Next Project</h2>
        <a href="/contact" className="btn bg-blue-600 text-white py-2 px-6 rounded-lg mt-3 text-lg">
          Schedule a Meeting
        </a>
      </div>
      <Footer />
    </div>
  );
}
