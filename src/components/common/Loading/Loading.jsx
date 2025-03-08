"use client";

import { motion } from "framer-motion";
import { FaTrain } from "react-icons/fa";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="mb-6">
        <Image
          src="/public/logo/GGMV-logo.png"
          alt="Logo"
          width={100}
          height={100}
          priority
        />
      </div>
      <motion.div
        className="flex items-center text-6xl"
        animate={{ x: [0, 200, -200, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      >
        <FaTrain className="text-blue-400" />
      </motion.div>
      <p className="mt-4 text-lg text-gray-300 animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;
