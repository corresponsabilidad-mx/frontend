import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";


const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <main className={styles.cajaPrincipal}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;