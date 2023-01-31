import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {

  const pages = ["/sign-in", "/sign-up"]

  const location = useLocation()

  const isHidden = pages.findIndex(page => page == location.pathname);

  return (
    <>
      {isHidden < 0 && <Header />}
      <main className="dark:bg-zinc-900">
        {children}
      </main>
      {isHidden < 0 && <Footer />}
    </>
  );
}

export default Layout;