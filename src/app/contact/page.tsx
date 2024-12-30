// components/Contact.tsx
"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbw886Ig5BbZPogU7ZictduVuc1Qje8ESE541KojyT_6ZVsXx16_pNiYzCLa4D2YtnSW/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setSubmissionStatus("Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" }); // Clear the form
      } else {
        setSubmissionStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto mt-5 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">Contact Me</h1>
          <p className="text-lg mb-8">Feel free to get in touch for any projects, collaborations, or questions!</p>

          <h3 className="text-xl font-semibold text-gray-700">Email:</h3>
          <p>
            <a href="mailto:piyushat115@gmail.com" className="text-blue-600">
              piyush@piyushkumar.me
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">WhatsApp:</h3>
          <p>
            <a href="https://wa.me/918872312995" target="_blank" className="text-green-600">
              +91 88723 12995
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl text-green-600 font-semibold mb-4">Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="Name" className="block text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Message" className="block text-sm font-medium text-gray-600">
                Your Message
              </label>
              <textarea
                id="Message"
                name="Message"
                value={formData.Message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg text-black"
                placeholder="Type your message"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 ${isSubmitting ? "bg-gray-400" : "bg-blue-600"} text-white font-semibold rounded-lg ${
                !isSubmitting && "hover:bg-blue-700"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          {submissionStatus && (
            <p className="mt-4 text-center text-sm font-medium text-green-600">{submissionStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
