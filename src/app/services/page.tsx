export default function Services() {
  const services = [
    {
      name: "Web Development",
      description:
        "I create responsive and dynamic websites tailored to your needs, ensuring an optimal user experience across all devices.",
    },
    {
      name: "Google Cloud Solutions",
      description:
        "Leverage the power of Google Cloud to scale your business, optimize workloads, and improve performance with advanced cloud services.",
    },
    {
      name: "AWS Solutions",
      description:
        "Build, deploy, and scale applications with Amazon Web Services, utilizing its robust infrastructure and tools.",
    },
    {
      name: "Google APIs Integration",
      description:
        "Integrate Google APIs into your applications to enable features like maps, calendars, and analytics seamlessly.",
    },
    {
      name: "Google Ads Script",
      description:
        "Automate your ad campaigns with custom Google Ads Scripts to optimize performance and save time.",
    },
    {
      name: "Backup Solutions",
      description:
        "Ensure data security with reliable and automated backup solutions tailored to your business needs.",
    },
    {
      name: "Monitoring and Performance",
      description:
        "Monitor your systems and applications with real-time tools to ensure uptime and optimal performance.",
    },
    {
      name: "Information and Reporting",
      description:
        "Create detailed reports to analyze business data and drive better decision-making processes.",
    },
    {
      name: "Google Ads Reporting",
      description:
        "Generate insightful reports for your Google Ads campaigns to track performance and improve ROI.",
    },
    {
      name: "Software Development",
      description:
        "Develop custom software solutions tailored to your unique business requirements with cutting-edge technology.",
    },
    {
      name: "Troubleshooting and Technical Support",
      description:
        "Provide fast and reliable technical support and troubleshooting to ensure your systems run smoothly.",
    },
    {
      name: "Technology Training",
      description:
        "Empower your team with training on the latest technologies to improve productivity and innovation.",
    },
  ];

  return (
    <div className="min-h-screen p-8 mt-10 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section */}
      <div className="flex flex-col">
        <h1 className="text-5xl font-extrabold text-primary text-center">
          My Services
        </h1>
      </div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              className="shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              key={index}
            >
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">{service.name}</h2>
              </div>
              <div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

