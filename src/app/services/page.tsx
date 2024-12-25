import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />

      {/* Main Section */}
      <div className="flex flex-col mt-12">
        <h1 className="text-5xl font-extrabold text-primary dark:text-white text-center">Our Products and Services</h1>
        <p className="text-xl mt-6">
          We offer a wide range of services to meet your business needs, whether you are looking to build a website, develop custom software, or design engaging user interfaces.
        </p>
      </div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-black">Web Development</h2>
            </div>
            <div className="text-gray-700">
              <p>We create responsive and dynamic websites tailored to your needs, ensuring an optimal user experience across all devices.</p>
            </div>
          </div>

          {/* Software Development Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-black">Software Development</h2>
            </div>
            <div className="text-gray-700">
              <p>Custom software solutions to streamline your business operations, enhance efficiency, and drive growth.</p>
            </div>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-black">UI/UX Design</h2>
            </div>
            <div className="text-gray-700">
              <p>Designing user-friendly interfaces with a focus on providing a seamless and intuitive experience for your users.</p>
            </div>
          </div>

          {/* Consulting Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-black">Consulting</h2>
            </div>
            <div className="text-gray-700">
              <p>Expert advice to help guide you through technology and digital transformation, ensuring your business stays competitive in the digital age.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
