"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";
import Image from "next/image";

/**
 * @typedef {Object} Slide
 * @property {string} image
 * @property {string} title
 * @property {string} description
 * @property {string} extraText
 */

const Home = () => {
  /** @type {[Slide[], Function]} */
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/slideData.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load slides");
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid JSON format");
        setSlides(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading slide data:", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    cssEase: "linear",
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {loading ? (
        <p className="text-center text-white text-xl mt-20">Loading slides...</p>
      ) : slides.length > 0 ? (
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority
                className="z-0"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 text-left z-10">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <Typewriter
                    options={{
                      strings: [slide.title, `Discover ${slide.title}`],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 30,
                    }}
                  />
                </h1>
                <p className="text-lg md:text-2xl mt-2">{slide.description}</p>
                <p className="text-lg md:text-xl mt-6 italic text-right">{slide.extraText}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-white text-xl mt-20">No slides available</p>
      )}
    </div>
  );
};

export default Home;
