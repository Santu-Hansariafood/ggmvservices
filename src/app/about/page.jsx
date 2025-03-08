import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading/Loading";
const About = dynamic(() => import("@/components/ui/About/About"));

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <About />
    </Suspense>
  );
};

export default Page;
