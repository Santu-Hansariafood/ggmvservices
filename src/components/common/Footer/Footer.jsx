"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/", description: "Return to homepage" },
    { name: "About", path: "/about", description: "Learn about GGMV Services" },
    { name: "Services", path: "/services", description: "Explore our services" },
    { name: "Directors", path: "/directors", description: "Meet our leadership team" },
    { name: "Clients", path: "/clients", description: "View our client portfolio" },
    { name: "Locations", path: "/locations", description: "Find our office locations" },
    { name: "Career", path: "/career", description: "Join our team" },
    { name: "Contact", path: "/contact", description: "Get in touch with us" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <FaFacebookF />, href: "#", color: "hover:text-[#1877F2]" },
    { name: "Twitter", icon: <FaTwitter />, href: "#", color: "hover:text-[#1DA1F2]" },
    { name: "Instagram", icon: <FaInstagram />, href: "#", color: "hover:text-[#E4405F]" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "#", color: "hover:text-[#0077B5]" },
    { name: "YouTube", icon: <FaYoutube />, href: "#", color: "hover:text-[#FF0000]" },
  ];

  return (
    <footer 
      className="bg-gray-900 text-gray-300 mt-auto"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <motion.h2
              className="text-xl font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-yellow-400">GGMV</span>{" "}
              <span className="text-gray-300">Services</span>
            </motion.h2>
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Excellence in Railway Wagon & Labor Contracting
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.slice(0, 4).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    className="block text-sm text-gray-400 hover:text-yellow-400 transition"
                    aria-label={link.description}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {quickLinks.slice(4).map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: (index + 4) * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    className="block text-sm text-gray-400 hover:text-yellow-400 transition"
                    aria-label={link.description}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Connect With Us
            </h3>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={`Follow us on ${social.name}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-xl" aria-hidden="true">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {currentYear} GGMV Services. All rights reserved.</p>
          <p className="mt-2">Developed and maintained by Santu De</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
