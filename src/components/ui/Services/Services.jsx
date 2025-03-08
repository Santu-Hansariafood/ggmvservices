"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";
import ServiceImage1 from "../../../../public/services/WAGON-REPAIR.jpg";
import ServiceImage2 from "../../../../public/services/Labor.jpeg";
import ServiceImage3 from "../../../../public/services/railway-track.jpg";
import Loading from "@/components/common/Loading/Loading";
const GridDistortion = dynamic(() =>
  import("@/components/animation/GridDistortion/GridDistortion")
);

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
  const services = [
    {
      title: "Railway Wagon Services",
      description:
        "We provide top-notch railway wagon management services ensuring efficiency, safety, and smooth operations.",
      image: ServiceImage1,
    },
    {
      title: "Labor Contractor Solutions",
      description:
        "Our skilled workforce ensures seamless operations in railway and logistics industries, improving efficiency and productivity.",
      image: ServiceImage2,
    },
    {
      title: "Maintenance & Logistics",
      description:
        "We offer maintenance, logistics, and management services, optimizing railway wagon performance and reducing downtime.",
      image: ServiceImage3,
    },
  ];

  return (
    <Suspense fallback={<Loading />}>
      <section className="relative w-full min-h-screen flex flex-col items-center py-16 px-4 bg-gray-100">
        <div className="absolute inset-0 z-0 opacity-40">
          <GridDistortion imageSrc="/images/slide1.jpg" />
        </div>
        <div className="relative z-10 w-full max-w-6xl text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-12">
            Our Services
          </h2>

          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className={`flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2 h-80 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-green-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Services;
