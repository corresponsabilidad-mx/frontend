import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <header><NavBar/></header>      
      <main className="container cajaPrincipal">{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;