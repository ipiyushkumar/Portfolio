// pages/about.tsx

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1 className="text-3xl">Overview</h1>
      {/* About Section */}
      <div className="flex flex-col mt-5">
        <p className="text-base leading-6">
          Back in 2018, I decided to try Python. It turned out I had a talent for programming, but I ignored it at the time.
          <br /><br />
          In 2020, after completing my 12th standard at Kendriya Vidyalaya, I decided to pursue programming again at college as a B.Tech graduate.
          <br /><br />
          Fast forward to today, I have had the privilege of building my career in programming with several languages and tools at my disposal.
          <br /><br />
          My main focus these days is building IT solutions for not-so-tech-savvy professionals who want to get their hands into IT.
          <br /><br />
          When I am not on the computer, I usually go for bike riding, hang out with my friends, and spend time with my cat.
        </p>
      </div>

      {/* Trainings Section */}
      <div>
        <h2 className="text-2xl font-semibold underline mt-8 mb-4">Trainings</h2>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">Java (CORE) | OOPS Info Solutions Pvt. Ltd.</h3>
            <p className="text-sm mt-2">Learned how to efficiently write programs in OOPS, one of the industry standards.</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>JAVA</li>
              <li>JAVA FX</li>
            </ul>
          </div>
          <h4 className="text-sm whitespace-nowrap">JUL 2023 - AUG 2023</h4>
        </section>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">Python With Machine Learning | The Core Systems</h3>
            <p className="text-sm mt-2">Worked on regression models such as linear, polynomial, and logistic regression models.</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Python</li>
              <li>NumPy</li>
              <li>Scikit-learn</li>
              <li>Keras</li>
              <li>TensorFlow</li>
            </ul>
          </div>
          <h4 className="text-sm whitespace-nowrap">JUL 2022 - SEP 2022</h4>
        </section>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">The Web Developer Bootcamp 2021 | Udemy Courses</h3>
            <p className="text-sm mt-2">Worked on web applications hosted on web servers alongside Linux.</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>Mongoose.js</li>
              <li>Embedded.js</li>
            </ul>
          </div>
          <h4 className="text-sm whitespace-nowrap">AUG 2021 - SEP 2021</h4>
        </section>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl font-semibold underline mt-8 mb-4">Education</h2>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">B.Tech in Computer Science and Engineering</h3>
            <p className="text-sm mt-2">I pursued my B.Tech degree, working on several projects and assignments. My studies ended back in Mar 2024.</p>
          </div>
          <h4 className="text-sm whitespace-nowrap">2020 - 2024</h4>
        </section>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">12th Standard in Physics, Chemistry, and Mathematics</h3>
            <p className="text-sm mt-2">I completed my 12th standard in PCM with flying colors and achieved a score of 74% from CBSE Board.</p>
          </div>
          <h4 className="text-sm whitespace-nowrap">2018 - 2020</h4>
        </section>

        <section className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-medium underline">10th Standard from CBSE Board</h3>
            <p className="text-sm mt-2">I completed my 10th standard at Kendriya Vidyalaya and achieved a score of 70%.</p>
          </div>
          <h4 className="text-sm whitespace-nowrap">2016 - 2018</h4>
        </section>
      </div>

      {/* Projects Section */}
      <div>
        <h2 className="text-2xl font-semibold underline mt-8 mb-4">Projects</h2>

        <section className="mb-6">
          <div>
            <h3 className="text-lg font-medium">Classic Space Shooter</h3>
            <p className="text-sm mt-2">A JavaScript game where the player moves left or right to shoot incoming asteroids with a spaceship.</p>
            <ul className="flex space-x-4 mt-2 text-sm text-blue-500">
              <a href="https://dark-king-001.github.io/Classic_Shooter/" target="_blank"><li>Play</li></a>
              <a href="https://github.com/dark-king-001/Classic_Shooter" target="_blank"><li>Git Repo</li></a>
            </ul>
          </div>
          <h4 className="text-sm mt-2">AUG 2023 - AUG 2023</h4>
        </section>

        <section className="mb-6">
          <div>
            <h3 className="text-lg font-medium">Paint Shapes</h3>
            <p className="text-sm mt-2">A shape painting application developed in Java using JavaFX.</p>
            <ul className="flex space-x-4 mt-2 text-sm text-blue-500">
              <a href="https://github.com/dark-king-001/Scraper" target="_blank"><li>Git Repo</li></a>
            </ul>
          </div>
          <h4 className="text-sm mt-2">AUG 2023 - AUG 2023</h4>
        </section>

        <section className="mb-6">
          <div>
            <h3 className="text-lg font-medium">Hand Gesture Recognition</h3>
            <p className="text-sm mt-2">A script to control system volume using hand gestures recognized by a computer vision model using MediaPipe.</p>
            <ul className="flex space-x-4 mt-2 text-sm text-blue-500">
              <a href="https://github.com/dark-king-001/Hand_gesture" target="_blank"><li>Git Repo</li></a>
            </ul>
          </div>
          <h4 className="text-sm mt-2">SEP 2022 - SEP 2022</h4>
        </section>

        <section className="mb-6">
          <div>
            <h3 className="text-lg font-medium">Snake Game</h3>
            <p className="text-sm mt-2">A beginner-level C++ game covering OOPS and pointer concepts.</p>
            <ul className="flex space-x-4 mt-2 text-sm text-blue-500">
              <a href="https://github.com/dark-king-001/Snake_Game" target="_blank"><li>Git Repo</li></a>
            </ul>
          </div>
          <h4 className="text-sm mt-2">OCT 2021 - OCT 2021</h4>
        </section>
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col items-center text-center mt-10">
        <h2 className="text-3xl font-bold text-danger">Let&#39;s Work Together on Your Next Project</h2>
        <a
          href="/contact"
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg inline-block"
        >
          Schedule a Meeting
        </a>
      </div>

      {/* Image Section */}
      <div className="flex flex-col text-center mt-8">
        <Image
          src="/assets/profileImage.jpg"
          alt="Piyush Kumar"
          className="rounded-full mx-auto"
          width={300}
          height={300}
        />
      </div>

    </div>
  );
}
