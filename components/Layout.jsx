import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";


const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;