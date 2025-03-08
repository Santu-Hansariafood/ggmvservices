import dynamic from "next/dynamic";
const About = dynamic(() => import("@/components/ui/About/About"));

const Page = () => {
  return (
    <>
      <About />
    </>
  );
};

export default Page;
