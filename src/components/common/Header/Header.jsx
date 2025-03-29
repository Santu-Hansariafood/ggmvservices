"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaUserTie,
  FaUsers,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../../public/logo/GGMV-logo.png";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/home", icon: <FaHome />, ariaLabel: "Go to Home page" },
    { name: "About", path: "/about", icon: <FaInfoCircle />, ariaLabel: "Learn more about GGMV Services" },
    { name: "Services", path: "/services", icon: <FaCogs />, ariaLabel: "View our services" },
    { name: "Directors", path: "/directors", icon: <FaUserTie />, ariaLabel: "Meet our directors" },
    { name: "Clients", path: "/clients", icon: <FaUsers />, ariaLabel: "See our clients" },
    { name: "Locations", path: "/locations", icon: <FaMapMarkerAlt />, ariaLabel: "Find our locations" },
  ];

  return (
    <header
      role="banner"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center group"
            aria-label="GGMV Services Home"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={logo}
                alt="GGMV Services Logo"
                width={60}
                height={40}
                priority
                className="transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            aria-label="Main menu"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.path}
                  aria-label={item.ariaLabel}
                  className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 relative group ${
                    pathname === item.path
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  <span className="text-base" aria-hidden="true">{item.icon}</span>
                  <span>{item.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    pathname === item.path ? "scale-x-100" : ""
                  }`} />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FaTimes className="text-xl text-gray-300" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl text-gray-300" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      aria-label={item.ariaLabel}
                      className={`flex items-center gap-3 text-sm font-medium transition-all duration-300 ${
                        pathname === item.path
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text-base" aria-hidden="true">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
