// pages/gallery.tsx

import Image from "next/image";

export default function Gallery() {
  const cyberthon = [
    { src: '/gallery/Cyberthon1.jpg', alt: 'Cyberthon 1', description: 'Hackathon ended with use recieving the certificates :), i am at the right' },
    { src: '/gallery/Cyberthon2.jpg', alt: 'Cyberthon 2', description: 'Me Pitching the Idea to the Judges' },
    { src: '/gallery/Cyberthon3.jpg', alt: 'Cyberthon 3', description: 'We all took our last picture before our departure from the hackathon' },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section: Gallery */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-4">Photo Gallery</h1>
        <p className="text-center text-lg mb-12">Browse through some of my personal and professional moments.</p>

        {/* Gallery Grid */}
        <h2 className="text-3xl">Chandigarh Police, CyberThon by InfoSys</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cyberthon.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <Image src={image.src} alt={image.alt} width={500} height={300} className="w-full h-auto rounded-t-lg" />
              <div className="p-4">
                <p className="text-center text-sm text-muted">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
