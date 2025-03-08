import dynamic from "next/dynamic";
const Services = dynamic(() => import("@/components/ui/Services/Services"));

const page = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default page;
