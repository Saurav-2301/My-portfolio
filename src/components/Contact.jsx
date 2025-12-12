import React, { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Globe, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear previous error/success when user types
    if (success || error) {
      setSuccess(false);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:4000/api/v1/payment/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message || "Failed to send message");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 min-h-screen"
    >
      <style jsx>{`
        .text { color: #001244; }
        .bord { border: 2px solid #001244; }
        .success { background: #10b981; }
        .error { background: #ef4444; }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-12 mt-20 text-center text-[#001244]"
        >
          Get In Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border bord"
        >
          {success && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="success text-white p-4 rounded-lg mb-6 text-center font-semibold"
            >
              ✅ Message sent successfully! I'll reply within 24 hours.
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="error text-white p-4 rounded-lg mb-6 text-center font-semibold"
            >
              ❌ {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#001244] mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bord rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001244] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#001244] mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bord rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001244] focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#001244] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full p-4 bord rounded-xl focus:outline-none focus:ring-2 focus:ring-[#001244] focus:border-transparent resize-vertical"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#001244] text-white py-4 px-6 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-[#001244]">
            Or connect with me on
          </h3>
          
          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://www.linkedin.com/in/saurav-singh-915a57257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#001244] hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-12 h-12" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Saurav-2301"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#001244] hover:text-gray-800 transition-colors"
            >
              <Github className="w-12 h-12" />
            </motion.a>
            
            <motion.a
              href="mailto:sauravsingh2153@gmail.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#001244] hover:text-green-600 transition-colors"
            >
              <Mail className="w-12 h-12" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
