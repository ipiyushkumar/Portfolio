export default function Home() {
  const technologies = [
    "HTML5",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Java",
    "JavaFX",
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "C++",
    "SFML",
    "Linux Server",
    "Bash",
  ];

  const skills = [
    "Web Development",
    "Problem Solving",
    "Object-Oriented Programming (OOP)",
    "Machine Learning",
    "Artificial Intelligence",
    "Game Development",
    "Data Structures and Algorithms (DSA)",
  ];

  const languages = ["English", "Hindi"];

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section */}
      <div className="flex flex-col text-center mt-5">
        <h1 className="text-4xl font-extrabold text-primary dark:text-white">Piyush Kumar</h1>
        <h4 className="text-5xl text-danger">Full stack web developer</h4>
        <p className="text-lg mt-4">
          Hi, I&#39;m Piyush Kumar, a passionate Developer ready to bring your ideas to life.
          I am an Engineer that specializes in Software and web development. I make high quality web sites in all manner of technologies such as NEXT JS, React JS, ExpressJS, Spring Boot. i also code in several languages such as JavaScript, TypeScript, Java, Python, C, C++, C# and other languages.
        </p>
      </div>

      {/* Technologies Section */}
      <h2 className="text-2xl mt-10 mb-4 text-center">TECHNOLOGIES</h2>
      <div className="flex justify-evenly flex-wrap gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="p-3 rounded-lg shadow-lg text-center"
          >
            {tech}
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <h2 className="text-2xl mt-10 mb-4 text-center">SKILLS</h2>
      <div className="flex justify-evenly flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-3 rounded-lg shadow-lg text-center"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* Languages Section */}
      <h2 className="text-2xl mt-10 mb-4 text-center">LANGUAGES</h2>
      <div className="flex justify-evenly flex-wrap gap-4">
        {languages.map((language, index) => (
          <div
            key={index}
            className="p-3 rounded-lg shadow-lg text-center"
          >
            {language}
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center text-center mt-10">
        <h2 className="text-3xl text-danger">
          Let&#39;s work together on your next project!
        </h2>
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
