"use client";

import Loading from "@/components/common/Loading/Loading";
import { motion } from "framer-motion";
import Image from "next/image";
import { Suspense } from "react";

const Contact = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 p-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/contact-image.jpg"
            alt="Contact Us"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white focus:border-blue-500 focus:ring focus:ring-blue-300 transition"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white focus:border-blue-500 focus:ring focus:ring-blue-300 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-white focus:border-blue-500 focus:ring focus:ring-blue-300 transition"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </Suspense>
  );
};

export default Contact;
