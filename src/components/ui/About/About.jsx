"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutImage from "../../../../public/images/GGMV-logo.png";
import SplashCursor from "@/components/animation/SplashCursor/SplashCursor";

const About = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden bg-black">
      {/* SplashCursor Animation in Background */}
      <div className="absolute inset-0 z-0">
        <SplashCursor />
      </div>

      {/* Background Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-7xl flex flex-col md:flex-row items-center justify-between z-10 space-y-10 md:space-y-0 md:space-x-12">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-white drop-shadow-md">
            We are committed to providing the best services in the industry. Our
            team consists of dedicated professionals striving for excellence.
          </p>
          <p className="text-lg leading-relaxed text-white drop-shadow-md">
            With years of experience and a deep understanding of the industry, we
            bring efficiency, reliability, and innovation to every project we
            undertake.
          </p>
          <p className="text-lg leading-relaxed text-white drop-shadow-md">
            Our mission is to continuously improve and deliver quality solutions
            that exceed expectations.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src={AboutImage}
            alt="About Us Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
