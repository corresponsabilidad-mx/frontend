import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.css";

const Footer= () => {

    return (
        <>
        <div className="footer fixed-bottom">
            <div className="container pt-5 pb-3 px-0">
                <div className="row rowFooter">
                    <div className="md-footer col-6 col-sm-4 divFooter mt-0">
                        <Image
                        className="pb-2 ml-3"
                        src="/../public/images/logo/logo.jpg"
                        height={70}
                        width={70}
                        alt="logo"
                        ></Image>
                        <p><BsGeoAltFill className="footer-icono"/><Link href="https://www.google.com/maps/place/Costa+98,+Ampliacion+Los+Alpes,+%C3%81lvaro+Obreg%C3%B3n,+01710+Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.3573815,-99.2113039,17z/data=!3m1!4b1!4m5!3m4!1s0x85d20015a02cb75f:0x1cfb8a66e56d176a!8m2!3d19.3573815!4d-99.2091152"><a className="text-white" target="_blank"> Costa 98 Colonia Ampliación los Alpes - <br /> Alcaldia Álvaro Obregón-CP 01710- México</a></Link></p>
                        <p><BsTelephoneFill className="footer-icono"/><span> Teléfono</span></p>
                        <p className="mail-p"><BsFillEnvelopeFill className="footer-icono"/><span> contacto@corresponsabilidadsocial.org.mx</span></p>
                    </div>
                    <div className="md-contacto col-6 col-sm-4 divFooter">
                        <h5>Redes Sociales</h5>        
                        <p><BsFacebook className="footer-icono"/><span> Facebook:</span></p>
                        <p><a className="text-white" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank">facebook.com/csm.org.mx</a></p>
                        <p><BsInstagram className="footer-icono"/><span> Instagram:</span></p>
                        <p><a className="text-white" href="https://www.instagram.com/corresponsabilidadsocialmx" rel="noreferrer" target="_blank">corresponsabilidadsocialmx</a></p>
                    </div>
                    <div className="md-footer col-6 col-sm-4 divFooter">
                        <h5>Nuestro objetivo</h5>
                        <p>Instrumentar a acciones que construyan a una cultura de la Corresponsabilidad y paz desde el desarrollo, prevención y dignificación de los derechos de niñas, niños, adolescentes y mujeres.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;