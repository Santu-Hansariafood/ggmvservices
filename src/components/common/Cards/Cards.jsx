"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Cards = ({ image, name, title, socialLinks }) => {
  return (
    <div className="w-full sm:w-[350px] h-[450px] rounded-lg shadow-lg overflow-hidden group relative">
      <div className="relative w-full h-[70%] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:blur-md"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition duration-500"
        >
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition"
            >
              <FaXTwitter size={20} />
            </a>
          )}
        </motion.div>
      </div>
      <div className="w-full h-[30%] flex flex-col items-center justify-center p-4 bg-white">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default Cards;
