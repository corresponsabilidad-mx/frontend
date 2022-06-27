import { BsSuitHeartFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsFillGeoFill } from "react-icons/bs";
import Image from "next/image";

const Carta = () => {
  return (
    <>
      <div className="caja-cifra">
        <div className="col-sm-5 div-cifra-center">
          <div className="card">
            <div className=".card-padding div-cifra linea-vertical">
              <h4 className="titulo-cifra">Nuestras cifras de impacto</h4>
              <p className="descrip-cifra">
                Junto con nuestros aliados estratégicos, logramos importantes
                cifras, beneficiando cada día a más personas, en más localidades
                y mejorando resultados en nuestros proyectos, lo que nos impulsa
                a seguir trabajando y generando nuevas ideas a favor de cada
                sector.{" "}
              </p>
              <div className="contenedor-cifras">
                <span>
                  <BsSuitHeartFill className="icono-cifra" />
                  <p className="num-letra-cifra">
                    <b>13,753</b>
                  </p>
                  <p className="num-letra-cifra-p">
                    Total de personas impactadas
                  </p>
                </span>

                <span>
                  <BsCheckCircleFill className="icono-cifra" />
                  <p className="num-letra-cifra">
                    <b>523</b>
                  </p>
                  <p className="num-letra-cifra-p">
                    Total de proyectos realizados
                  </p>
                </span>

                <span>
                  <BsFillGeoFill className="icono-cifra" />
                  <p className="num-letra-cifra">
                    <b>843</b>
                  </p>
                  <p className="num-letra-cifra-p">
                    Total de localidades impactadas
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="card">
            <div className=".card-padding div-carta">
              <div className="contenedor-foto">
                <Image
                  src="/images/carta/foto-rosa1.png"
                  className="foto-rosa"
                  alt="rosa"
                  width={80}
                  height={110}
                ></Image>
              </div>
              <p className="p-carta espacio">
                Como Fundadora y a todo el equipo de Corresponsabilidad Social
                Mexicana A.C., nos complace contar con su visita para conocer y
                apoyar nuestros proyectos. Agradecemos de antemano cada uno de
                los esfuerzos que sin duda hizo para llegar hasta aquí. Como lo
                es para usted, nuestra mayor preocupación son los efectos y
                consecuencias de la violencia y la desigualdad, como la
                violación a los derechos humanos que padecen niñas, niños,
                adolescentes y mujeres en México y el mundo. Es por ello que en
                este espacio compartimos nuestros proyectos, investigaciones y
                acciones de política pública, con el fin de invitarle a conocer
                y participar como agente de cambio para ayudarnos a reducir
                estas problemáticas.
              </p>

              <p className="p-carta">
                Usted y yo podemos cambiar la vida de miles de personas ¡Le
                damos la bienvenida!
              </p>

              <p className="p-carta">Atentamente,</p>

              <p>
                <b className="p-carta">Rosa Martha Loría San Martín</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carta;
