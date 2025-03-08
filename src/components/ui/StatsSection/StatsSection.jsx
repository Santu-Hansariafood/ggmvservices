"use client";

import Counter from "@/components/animation/Counter/Counter";

const StatsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 flex flex-col md:flex-row justify-center items-center gap-12">
      {/* Happy Customers */}
      <div className="flex flex-col items-center">
        <Counter 
          value={1000} 
          places={[1000, 100, 10, 1]} 
          fontSize={80} 
          padding={5} 
          gap={10} 
          textColor="white" 
          fontWeight={900} 
        />
        <p className="text-xl font-semibold mt-2">Happy Customers</p>
      </div>

      {/* Years of Experience */}
      <div className="flex flex-col items-center">
        <Counter 
          value={5} 
          places={[10, 1]} 
          fontSize={80} 
          padding={5} 
          gap={10} 
          textColor="white" 
          fontWeight={900} 
        />
        <p className="text-xl font-semibold mt-2">Years of Experience</p>
      </div>

      {/* Big Projects */}
      <div className="flex flex-col items-center">
        <Counter 
          value={20} 
          places={[100, 10, 1]} 
          fontSize={80} 
          padding={5} 
          gap={10} 
          textColor="white" 
          fontWeight={900} 
        />
        <p className="text-xl font-semibold mt-2">Big Projects</p>
      </div>
    </section>
  );
};

export default StatsSection;
