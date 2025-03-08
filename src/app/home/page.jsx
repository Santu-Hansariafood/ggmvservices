import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/common/Loading/Loading";
const Home = dynamic(() => import("@/components/ui/Home/Home"));

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default Page;
