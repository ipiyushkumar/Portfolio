// pages/about.tsx

import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />

      {/* About Section */}
      <div className="flex flex-col mt-5">
        <h1 className="text-4xl text-center font-bold text-primary dark:text-white">About Me</h1>
        <p className="text-lg mt-4">
          Hello! I&#39;m <strong className="text-primary">Piyush Kumar</strong>, a passionate web and software developer with 3 years of experience.
        </p>

        <p className="text-lg mt-4">
          My journey started with a fascination for technology and a desire to build things from scratch. Over the years, I &lp ve honed my skills in various programming languages and frameworks, always striving to stay ahead of industry trends.
        </p>
        <p className="text-lg mt-4">
          When I&#39;m not coding, you might find me working on games, personal projects, or learning new tech stacks. I believe continuous learning is the key to success in this evolving field.
        </p>
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

      {/* Image Section */}
      <div className="flex-flex-col text-center mt-8">
        <Image
          src="/profileImage.jpg"
          alt="Piyush Kumar"
          className="rounded-full mx-auto"
          width={300}
          height={300}
        />
      </div>

      <Footer />
    </div>
  );
}
