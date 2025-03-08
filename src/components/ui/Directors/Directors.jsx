"use client";

import dynamic from "next/dynamic";
import ProfileImage1 from "../../../../public/images/woner/rahul.webp";
import ProfileImage2 from "../../../../public/images/woner/woner2.webp";
import ProfileImage3 from "../../../../public/images/woner/woner-3.webp";
import { Suspense } from "react";
import Loading from "@/components/common/Loading/Loading";

const Cards = dynamic(() => import("@/components/common/Cards/Cards"));
const DecryptedText = dynamic(() =>
  import("@/components/animation/DecryptedText/DecryptedText")
);

const Directors = () => {
  const teamMembers = [
    {
      image: ProfileImage1,
      name: "Rahul Gupta",
      title: "CEO & Founder",
      socialLinks: {
        facebook: "https://facebook.com/johndoe",
        instagram: "https://instagram.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe",
      },
    },
    {
      image: ProfileImage2,
      name: "Suresh Gupta",
      title: "CEO & Founder",
      socialLinks: {
        facebook: "https://facebook.com/janesmith",
        instagram: "https://instagram.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        twitter: "https://twitter.com/janesmith",
      },
    },
    {
      image: ProfileImage3,
      name: "Gayatri Gupta",
      title: "CEO & Founder",
      socialLinks: {
        facebook: "https://facebook.com/davidjohnson",
        instagram: "https://instagram.com/davidjohnson",
        linkedin: "https://linkedin.com/in/davidjohnson",
        twitter: "https://twitter.com/davidjohnson",
      },
    },
  ];

  return (
    <Suspense fallback={<Loading/>}>
    <div className="w-full flex flex-col items-center space-y-8 p-10">
      <h1 className="text-3xl font-bold text-center">
        <span className="text-yellow-500">Meet Our</span>{" "}
        <span className="text-gray-800">Directors</span>
      </h1>
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
    </Suspense>
  );
};

export default Directors;
