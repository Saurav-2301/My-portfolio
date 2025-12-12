import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg text-white mt-56">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg mt-12 font-semibold mb-4">
              Saurav Singh
            </h3>
            <p className="text-sm text-gray-300">
              Web Developer | UI/UX Designer | Software Engineer
            </p>
          </div>
          <div>
            <h3 className="text-lg mt-12  font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={`/${item}` === "/Home" ? "/" : `/${item}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-12 ">Connect</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/Saurav-2301"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saurav-singh-915a57257/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="mailto:sauravsingh2153@gmail.com"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300">
            © {2026} Saurav Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
