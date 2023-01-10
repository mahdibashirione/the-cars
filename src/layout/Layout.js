import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="dark:bg-zinc-900">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;