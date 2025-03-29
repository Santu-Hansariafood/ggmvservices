import Loading from "@/components/common/Loading/Loading";
import ScrollToTop from "@/components/common/ScrollToTop/ScrollToTop";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const About = dynamic(() => import("@/components/ui/About/About"));
const Client = dynamic(() => import("@/components/ui/Clients/Clients"));
const Contact = dynamic(() => import("@/components/ui/Contact/Contact"));
const Directors = dynamic(() => import("@/components/ui/Directors/Directors"));
const Home = dynamic(() => import("@/components/ui/Home/Home"));
const Locations = dynamic(() => import("@/components/ui/Locations/Locations"));
const Services = dynamic(() => import("@/components/ui/Services/Services"));
const StatsSection = dynamic(() =>
  import("@/components/ui/StatsSection/StatsSection")
);

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <div className="w-full flex items-center justify-center">
          <Home />
        </div>
        <div className="w-full  flex items-center justify-center">
          <About />
        </div>
        <div className="w-full flex items-center justify-center">
          <Directors />
        </div>
        <div className="w-full  flex items-center justify-center">
          <Client />
        </div>
        <StatsSection />
        <div className="w-full  flex items-center justify-center">
          <Services />
        </div>
        <div className="w-full  flex items-center justify-center">
          <Contact />
        </div>
        <div className="w-full  flex items-center justify-center">
          <Locations />
        </div>
        <ScrollToTop/>
      </main>
    </Suspense>
  );
}
