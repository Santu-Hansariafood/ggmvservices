import About from "@/components/ui/About/About";
import Client from "@/components/ui/Clients/Clients";
import Directors from "@/components/ui/Directors/Directors";
import Home from "@/components/ui/Home/Home";
import Locations from "@/components/ui/Locations/Locations";
import Services from "@/components/ui/Services/Services";
import StatsSection from "@/components/ui/StatsSection/StatsSection";

export default function HomePage() {
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <Home />
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <About />
      </div>
      <div className="w-full flex items-center justify-center">
        <Directors />
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <Client />
      </div>
      <StatsSection />
      <div className="w-full py-20 flex items-center justify-center">
        <Services />
      </div>
      <div className="w-full py-20 flex items-center justify-center">
        <Locations />
      </div>
    </main>
  );
}
