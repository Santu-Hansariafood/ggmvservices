"use client";

import { useState } from "react";
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

  const navItems = [
    { name: "Home", path: "/home", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Directors", path: "/directors", icon: <FaUserTie /> },
    { name: "Clients", path: "/clients", icon: <FaUsers /> },
    { name: "Locations", path: "/locations", icon: <FaMapMarkerAlt /> },
  ];

  return (
    <header className="bg-gray-900 text-white w-full fixed top-0 left-0 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Logo" width={70} height={50} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 text-lg font-medium transition duration-300 hover:text-yellow-400 ${
                pathname === item.path ? "border-b-2 border-yellow-400" : ""
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-start p-4 space-y-4 shadow-md"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center gap-2 text-lg font-medium transition duration-300 hover:text-yellow-400"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
