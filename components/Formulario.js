import Link from "next/link";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

const Form = () => {
  return (
    <>
      <div
        className="d-flex flex-column form-container photo-form"
        style={{ fontFamily: "Montserrat" }}
      >
        <h3 className="primary-color bg-transparent mb-1 text-center mt-5 p-2">
          ¡Contáctanos!
        </h3>
        <h5 className="text-center">
          En Corresponsabilidad Social Mexicana queremos escucharte.
        </h5>
        <div className="form-contact">
          <div className="contact align-items-start">
            <p className="letra-form">
              <BsTelephoneFill className="footer-icono me-1" />
              <span>(52) 55 5084 0174</span>
            </p>
            <p className="letra-form">
              <BsFillEnvelopeFill className="footer-icono me-1" />
              <span>contacto@corresponsabilidadsocial.org.mx</span>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.271773888798!2d-99.20911520000001!3d19.3573815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20015a02cb75f%3A0x1cfb8a66e56d176a!2sCosta%2098%2C%20Ampliacion%20Los%20Alpes%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001710%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sar!4v1650317089200!5m2!1ses-419!2sar"
              width="250"
              height="180"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="align-self-center mt-4"
            ></iframe>
          </div>
          <div className="form-inputs">
            <form
              action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSexDJTuu9HsuM3bAtaF72BUJTKiIAsJxFG6x_UiHdO5smL4Gw/formResponse"
              method="post"
              className="d-flex flex-column align-items-center"
            >
              <input
                type="text"
                name="entry.1019727939"
                placeholder="Nombre"
                className="input-form"
              ></input>
              <input
                type="text"
                name="entry.889701095"
                placeholder="Apellido"
                className="input-form"
              ></input>
              <input
                type="text"
                name="entry.1109581953"
                placeholder="Teléfono"
                className="input-form"
              ></input>
              <input
                type="email"
                name="entry.54816082"
                placeholder="E-mail / Correo"
                className="input-form"
              ></input>
              <textarea
                type="text"
                name="entry.1584024495"
                placeholder="Mensaje"
                className="input-form"
                rows={4}
              ></textarea>
              <div className="d-flex align-items-center form-check">
                <input
                  type="checkbox"
                  name="entry.681712784"
                  className="me-1"
                  value={"He leído y acepto las políticas de privacidad"}
                ></input>
                <label className="fs-6 label-form">
                  <Link
                    href="https://drive.google.com/file/d/1ZhY_t2xqoqshxSGbSO2sWbtWVVnu1MbK/view?usp=sharing"
                    passHref
                  >
                    <a>He leído y acepto la política de privacidad</a>
                  </Link>
                </label>
              </div>
              <button type="submit" className="btn-form mt-3">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
