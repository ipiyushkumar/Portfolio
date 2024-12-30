// pages/gallery.tsx

import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: '/image1.jpg', alt: 'Image 1', description: 'Image Description 1' },
    { src: '/image2.jpg', alt: 'Image 2', description: 'Image Description 2' },
    { src: '/image3.jpg', alt: 'Image 3', description: 'Image Description 3' },
    { src: '/image4.jpg', alt: 'Image 4', description: 'Image Description 4' },
    { src: '/image5.jpg', alt: 'Image 5', description: 'Image Description 5' },
    { src: '/image6.jpg', alt: 'Image 6', description: 'Image Description 6' },
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Section: Gallery */}
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-4">Photo Gallery</h1>
        <p className="text-center text-lg mb-12">Browse through some of my personal and professional moments.</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
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
