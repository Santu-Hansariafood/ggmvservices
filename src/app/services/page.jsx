import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/common/Loading/Loading";
const Services = dynamic(() => import("@/components/ui/Services/Services"));

const page = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Services />
    </Suspense>
  );
};

export default page;
