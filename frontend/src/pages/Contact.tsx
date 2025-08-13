import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_9ye5a69",    
        "template_zxgexng",   
        formData,
        "ieWzbYYkPOOaXm2cr"    
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setError("");
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setError("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12 font-serif">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          Get in Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-medium mb-2">📧 Email</h2>
              <p className="text-[#2f2e2c]">info@agane.se</p>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2">📞 Phone</h2>
              <p className="text-[#2f2e2c]">+46 70 848 5534</p>
            </div>
            <p className="text-[#6e6b67] mt-4">
              Fill out the form and we’ll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-[#e8e5df] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-[#e8e5df] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              required
              className="w-full border border-[#e8e5df] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2f2e2c]"
            />
            <button
              type="submit"
              className="bg-[#2f2e2c] text-white px-6 py-2 rounded-md hover:bg-[#1a1a1a] transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-600 mt-2">
                Thank you! Your message has been sent.
              </p>
            )}

            {error && (
              <p className="text-red-600 mt-2">{error}</p>
            )}
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
