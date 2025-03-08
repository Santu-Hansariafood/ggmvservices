import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/common/Header/Header"));
const Footer = dynamic(() => import("@/components/common/Footer/Footer"));

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px] bg-gray-100">
        <div className="w-full bg-white">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
