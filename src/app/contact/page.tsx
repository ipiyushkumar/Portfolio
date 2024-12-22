// components/Contact.tsx
"use client"

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API, or email)
    console.log(formData);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Navigation />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">Contact Me</h1>
          <p className="text-lg mb-8">Feel free to get in touch for any projects, collaborations, or questions!</p>
          
          <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
          <p><a href="mailto:piyushat115@gmail.com" className="text-blue-600">piyush@piyushkumar.me</a></p>
          
          <h3 className="text-xl font-semibold text-gray-700 mt-4">WhatsApp:</h3>
          <p><a href="https://wa.me/918872312995" target="_blank" className="text-green-600">+91 88723 12995</a></p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
                placeholder="Type your message"
              />
            </div>

            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
