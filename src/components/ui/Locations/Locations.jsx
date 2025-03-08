"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";
import VariableProximity from "@/components/animation/VariableProximity/VariableProximity";

const Locations = () => {
  const containerRef = useRef(null);
  const address = `GGMV Services Private Limited\n24/2, Girish Mukherjee Road\nKolkata - 700025\nGSTIN/UIN: 19AALCG2285K1Z2\nState Name: West Bengal, Code: 19\nCIN: U30204WB2024PTC270417\nEmail: rhlgpt188@gmail.com`;

  return (
    <div className="flex flex-col gap-6 p-6 w-full" ref={containerRef}>
      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-center text-gray-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Corporate Address
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Google Map */}
        <motion.div
          className="w-full md:w-1/2 h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6641726479065!2d88.34255207515461!3d22.59358237948905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277233b02bfbd%3A0x3c7bd5218a42d1c7!2sGirish%20Mukherjee%20Rd%2C%20Bhowanipore%2C%20Kolkata%2C%20West%20Bengal%20700025!5e0!3m2!1sen!2sin!4v1709637123456!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Address Card */}
        <motion.div
          className="w-full md:w-1/2 h-[400px] flex items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white shadow-2xl p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-3xl relative w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold mb-2 text-gray-900 text-center">
              GGMV Services Private Limited
            </h2>
            <VariableProximity
              label="24/2, Girish Mukherjee Road: Kolkata - 700025"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 700"
              containerRef={containerRef}
              className="text-lg font-medium"
            />
            <p className="text-lg font-medium">
              GSTIN/UIN:{" "}
              <span className="font-normal italic">19AALCG2285K1Z2</span>
            </p>
            <p className="text-lg font-medium">
              State Name:{" "}
              <span className="font-normal italic">West Bengal, Code: 19</span>
            </p>
            <p className="text-lg font-medium">
              CIN:{" "}
              <span className="font-normal italic">U30204WB2024PTC270417</span>
            </p>
            <p className="text-lg font-medium">
              Email:{" "}
              <a
                href="mailto:rhlgpt188@gmail.com"
                className="text-blue-500 hover:underline italic"
              >
                rhlgpt188@gmail.com
              </a>
            </p>

            {/* Copy Address Button */}
            <CopyToClipboard text={address}>
              <button className="mt-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                <FiCopy className="mr-2" title="click to copy" /> Copy Address
              </button>
            </CopyToClipboard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Locations;
