import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

const Footer= () => {

    return (
        <>
        <div className={styles.footer}>
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="md-footer col-12 col-md-6 col-lg-3">
                        <Image
                        src="/../public/footer/img/logo.jpg"
                        height={120}
                        width={120}
                        alt="logo"
                        ></Image>
                    </div>
                    <div className="md-contacto col-12 col-md-6 col-lg-3 pl-2">
                        <h5>Contacto</h5>           
                        <p><BsFacebook className="footer-icono" /><span> Facebook</span></p>
                        <p><a className="text-white" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank">facebook.com/csm.org.mx</a></p>
                    </div>
                    <div className="md-footer col-12 col-md-6 col-lg-5">
                        <h5>Nuestra objetivo</h5>
                        <p>Instrumentar a acciones que construyan a una cultura de la Corresponsabilidad y paz desde el desarrollo, prevención y dignificación de los derechos de niñas, niños, adolescentes y mujeres.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;