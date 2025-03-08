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
  return (
    <footer className="relative bg-gray-900 text-white pt-10 pb-5 overflow-hidden">
      <div className="absolute -top-10 left-0 w-full h-20 bg-gray-900 rounded-b-full"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 relative z-10">
        <div className="text-center md:text-left">
          <motion.h2
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-yellow-400">GGMV</span>{" "}
            <span className="text-white">Services</span>
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
        <nav className="flex flex-col text-center space-y-2 mt-4 md:mt-0">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-400 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
            <Link
              href="/directors"
              className="hover:text-yellow-400 transition"
            >
              Directors
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/clients" className="hover:text-yellow-400 transition">
              Clients
            </Link>
            <Link
              href="/locations"
              className="hover:text-yellow-400 transition"
            >
              Locations
            </Link>
            <Link href="/career" className="hover:text-yellow-400 transition">
              Career
            </Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </motion.div>
        </nav>
        <motion.div
          className="flex space-x-4 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#" className="hover:text-[#1877F2]">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-[#1DA1F2]">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-[#E4405F]">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-[#0077B5]">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-[#FF0000]">
            <FaYoutube size={20} />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="text-center text-sm mt-6 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Developed and maintained by Santu De
      </motion.div>
    </footer>
  );
};

export default Footer;
