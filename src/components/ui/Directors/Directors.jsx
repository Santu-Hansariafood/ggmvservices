"use client"

import dynamic from "next/dynamic";
import ProfileImage1 from "../../../../public/images/slide1.jpg";
import ProfileImage2 from "../../../../public/images/slide1.jpg";
import ProfileImage3 from "../../../../public/images/slide1.jpg";

const Cards = dynamic(()=>import("@/components/common/Cards/Cards"));
const DecryptedText = dynamic(()=>import("@/components/animation/DecryptedText/DecryptedText"));

const Directors = () => {
  const teamMembers = [
    {
      image: ProfileImage1,
      name: "John Doe",
      title: "Expert Railway Wagon Contractor",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    {
      image: ProfileImage2,
      name: "Jane Smith",
      title: "Specialist in Labor Workforce Management",
      socialLinks: {
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      image: ProfileImage3,
      name: "David Johnson",
      title: "Leader in Logistics & Supply Chain Solutions",
      socialLinks: {
        facebook: "https://facebook.com/davidjohnson",
        instagram: "https://instagram.com/davidjohnson",
        linkedin: "https://linkedin.com/in/davidjohnson",
        twitter: "https://twitter.com/davidjohnson",
      },
    },
  ];

  return (
      <div className="w-full flex flex-col items-center space-y-8 p-10">
        {/* Title with Two Colors */}
        <h1 className="text-3xl font-bold text-center">
          <span className="text-yellow-500">Meet Our</span>{" "}
          <span className="text-gray-800">Directors</span>
        </h1>
        
        {/* DecryptedText Component instead of <p> */}
        <DecryptedText
          text="Our team brings decades of experience in railway logistics, labor management, and supply chain solutions. We are dedicated to delivering excellence and efficiency in every project."
          speed={50}
          maxIterations={10}
          sequential={true}
          revealDirection="start"
          className="text-center text-gray-600 max-w-2xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Cards
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </div>
  );
};

export default Directors;
