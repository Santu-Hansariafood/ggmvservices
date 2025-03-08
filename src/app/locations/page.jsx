import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading/Loading";
const Locations = dynamic(() => import("@/components/ui/Locations/Locations"));

const Page = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Locations />
    </Suspense>
  );
};

export default Page;
