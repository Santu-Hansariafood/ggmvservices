"use client";
import React, { useState } from "react";
import Ballpit from "@/components/animation/BallPit/BallPit";

const Career = () => {
  const [openings, setOpenings] = useState([
    { id: 1, title: "Software Engineer", location: "Remote", description: "Looking for a skilled React developer." },
    { id: 2, title: "Project Manager", location: "New York, USA", description: "Experienced in handling multiple projects." },
  ]);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-gray-100">
      {/* Ballpit Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Ballpit count={100} gravity={0.5} friction={0.5} wallBounce={0.95} followCursor={true} colors={["#32CD32", "#FFD700"]} />
      </div>

      {/* Career Content */}
      <div className="relative bg-white/90 backdrop-blur-md p-8 max-w-6xl w-full mx-auto rounded-2xl shadow-2xl border border-gray-200">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Join Our Team</h1>
        <p className="text-gray-600 text-center mb-8 text-lg">Explore exciting career opportunities with us.</p>

        {openings.length > 0 ? (
          <div className="grid grid-cols-2 gap-8">
            {openings.map((job) => (
              <div key={job.id} className="flex flex-col space-y-2">
                <h2 className="text-2xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-gray-500 font-medium">{job.location}</p>
                <p className="text-gray-700">{job.description}</p>
                <button
                  onClick={() => alert(`Applying for ${job.title}`)}
                  className="mt-3 w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-lg">No current openings. Please check back later.</p>
        )}

        {/* Apply Now Button */}
        {/* <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg shadow-md transition-all">
            Apply Now
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Career;
