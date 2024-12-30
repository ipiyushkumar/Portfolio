export default function Home() {
  const skills = [
    {name : "web development", percentage: "87"},
    {name : "graphic design", percentage: "70"},
    {name : "SEO Optimization", percentage: "85"},
    {name : "Python Programming", percentage: "90"},
  ]
  return (
    <div className="min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section */}
      <div className="flex flex-col text-center mt-5">
        <h1 className="text-4xl font-bold text-primary dark:text-white">Piyush Kumar</h1>
        <h4 className="text-2xl text-danger">FULL Stack Developer</h4>
        <p className="text-lg mt-4">Hi, I&#39;m Piyush Kumar, a passionate Developer ready to bring your ideas to life.</p>
      </div>

      <h2 className="text-2xl mb-6 text-center">SKILLS</h2>

      {/* Skills Section */}
      <div className="flex justify-evenly flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full">
              <svg className="absolute inset-0" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="transparent"
                  stroke="white" // Foreground color
                  strokeWidth="1"
                  strokeDasharray={skill.percentage+", 100"} // Bigger half
                  transform="rotate(-90 18 18)" // Rotate to start from top
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                {skill.percentage}%
              </div>
            </div>
            <h5 className="text-lg text-center">{skill.name}</h5>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center text-center mt-10">
        <h2 className="text-3xl text-danger">Let&#39;s Work Together on Your Next Project</h2>
        <br />
        <a 
          href="/contact" 
          className="btn bg-blue-600 text-white py-2 px-6 rounded-lg text-lg inline-block"
        >
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
}
