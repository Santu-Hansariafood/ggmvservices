import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/common/Header/Header"));
const Footer = dynamic(() => import("@/components/common/Footer/Footer"));

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <div className="max-w-full w-full bg-white">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
