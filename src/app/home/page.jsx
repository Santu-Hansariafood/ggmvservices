import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/ui/Home/Home"));

const Page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Page;
