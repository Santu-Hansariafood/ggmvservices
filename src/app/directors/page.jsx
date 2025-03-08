import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading/Loading";
const Directors = dynamic(() => import("@/components/ui/Directors/Directors"));

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Directors />
    </Suspense>
  );
};

export default Page;
