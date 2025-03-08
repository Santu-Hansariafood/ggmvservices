"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Home = () => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide1.jpg",
    "/images/slide1.jpg",
    "/images/slide1.jpg",
    "/images/slide1.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    cssEase: "linear",
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-screen">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-50 text-white p-8 text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                <Typewriter
                  options={{
                    strings: [
                      `Dynamic Title ${index + 1}`,
                      `Title ${index + 1} Back`,
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="text-lg md:text-2xl mt-2">
                This is a dynamic description for slide {index + 1}.
              </p>
              <p className="text-lg md:text-xl mt-6 italic text-right">
                Additional dynamic text for slide {index + 1}.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
