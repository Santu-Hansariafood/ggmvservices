import dynamic from "next/dynamic";
const Locations = dynamic(() => import("@/components/ui/Locations/Locations"));

const Page = () => {
  return (
    <>
      <Locations />
    </>
  );
};

export default Page;
