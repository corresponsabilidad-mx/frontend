import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
