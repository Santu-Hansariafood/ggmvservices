import dynamic from "next/dynamic";
import { Suspense } from "react";

const Career = dynamic(() => import("@/components/ui/Career/Career"));

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Career />
    </Suspense>
  );
};

export default Page;
