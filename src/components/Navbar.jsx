import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // Importing Link and NavLink from react-router-dom
import { motion } from "framer-motion";
import openMenu from "../assets/menu.png";
import closeMenu from "../assets/cross.png";
import logoimg from "../assets/logo.png";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/Experience" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
    { name: "Resume", path: "/resume" },
  ];

  return (
    <nav className="bg text-white">
      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: #4FD1C5; /* Neon color */
          text-shadow: 
            0 0 5px #4FD1C5,
            0 0 10px #4FD1C5,
            0 0 15px #4FD1C5; /* Neon effect */
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #4FD1C5;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .logo {
          background: linear-gradient(45deg, #4FD1C5, #63B3ED);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
          .bg{
            background-color: #001244;
          }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center text-xl font-bold logo">
            <img
              src={logoimg}
              alt="Logo"
              style={{ width: "100px", height: "63px" }}
              className="mr-2"
            />
            Saurav Singh
          </Link>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle mobile menu
              className="bg-gray-800 p-2 rounded-md text-gray-400 hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <img src={openMenu} style={{ width: "28px" }} alt="Menu" />
              ) : (
                <img src={closeMenu} style={{ width: "28px" }} />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`} // Control visibility with isOpen
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `nav-link block px-3 py-2 rounded-md text-base font-medium bg-gray-800 hover:bg-gray-700 text-white ${
                isActive ? "active" : ""
              }`
            }
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            {item.name}
          </NavLink>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
