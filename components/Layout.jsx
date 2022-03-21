import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";


const Layout = ({ children }) => {
  return (
    <>
      <main className={styles.cajaPrincipal}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;