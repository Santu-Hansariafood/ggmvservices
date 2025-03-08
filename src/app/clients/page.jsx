import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading/Loading";
const Client = dynamic(() => import("@/components/ui/Clients/Clients"));

const data = [
  { id: 1, image: "https://picsum.photos/id/10/200/300", height: 400 },
  { id: 2, image: "https://picsum.photos/id/14/200/300", height: 300 },
  { id: 3, image: "https://picsum.photos/id/15/200/300", height: 300 },
  { id: 4, image: "https://picsum.photos/id/16/200/300", height: 300 },
  { id: 5, image: "https://picsum.photos/id/17/200/300", height: 300 },
  { id: 6, image: "https://picsum.photos/id/19/200/300", height: 300 },
  { id: 7, image: "https://picsum.photos/id/37/200/300", height: 200 },
  { id: 8, image: "https://picsum.photos/id/39/200/300", height: 300 },
  { id: 9, image: "https://picsum.photos/id/85/200/300", height: 200 },
  { id: 10, image: "https://picsum.photos/id/103/200/300", height: 400 },
];

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Valuable Clients
        </h1>
        <Client data={data} />
      </div>
    </Suspense>
  );
};

export default Page;
