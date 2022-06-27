import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/router";

const Politicas = () => {
  const router = useRouter();

  return (
    <div className="container d-flex  me-5 mt-5 flex-column">
      <div className="align-text-center">
        <h3 className="align-self-center">
          “Política de Privacidad y Tratamiento de Datos Personales”
        </h3>
        <p>
          Corresponsabilidad Social Mexicana, Asociación Civil, en adelante CSM,
          se reconoce como titular de este sitio web, por lo tanto, responsable
          de los datos personales suministrados por usuarios y visitantes, de
          conformidad con lo dispuesto por la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento,
          en adelante la Ley. Informamos cuáles son los datos personales que
          podemos obtener, sus finalidades, así como los términos en que los
          estaremos utilizando, buscando en todo momento garantizar su
          confidencialidad y protección de acuerdo con las medidas de seguridad
          físicas, técnicas y administrativas que hemos dispuesto para dicho
          fin.
        </p>
        <p>
          La persona usuaria queda informada y consiente expresamente el
          tratamiento de los datos suministrados durante la navegación en esta
          página web, los que se generen como consecuencia de la utilización de
          la misma y los que comunique con CSM a través de los formularios
          existentes, aun finalizada la relación de contacto, o en su caso, las
          comunicaciones o las transferencias internacionales de los datos que
          pudieran realizarse, todo ello para las finalidades indicadas en el
          apartado correspondiente.
        </p>
        <p>
          En caso de que los datos facilitados se refieran a terceras personas
          físicas distintas a la persona usaría, ésta garantiza haber recabado y
          contar con el consentimiento previo de los mismos para la comunicación
          de sus datos y haberles informado, con carácter previo a facilitarlos,
          de las finalidades del tratamiento, comunicaciones y demás términos
          previstos en el apartado “Política de Privacidad y Tratamiento de
          Datos personales”.
        </p>
        <p>
          La persona usaría declara que es mayor de 18 años. De igual modo, en
          caso de que los datos que proporcione sean de menores de edad, como
          padre/madre o tutor del menor, autoriza expresamente el tratamiento de
          dichos datos incluidos, en su caso, los relativos a la salud, para la
          gestión de las finalidades detalladas en la información sobre
          protección de datos.
        </p>
        <p>
          La persona usuaria garantiza la exactitud y veracidad de los datos
          personales facilitados, comprometiéndose, en caso de atención y
          seguimiento, a mantenerlos debidamente actualizados y a comunicar a
          CSM cualquier variación que se produzca en los mismos.
        </p>
        <p>
          La utilización de esta web está sujeta a la presente “Política de
          Privacidad y Tratamiento de Datos Personales”, a las siguientes
          condiciones de uso que se detallan, así como a la Política de Cookies
          del mismo sitio web. Le rogamos que las lea atentamente.
        </p>

        <p></p>
      </div>

      <BiArrowBack
        fontSize={80}
        className="mt-5 mb-5 d-flex align-self-center"
        color="black"
        onClick={() => router.back()}
      />
      <p className="align-self-center">Regrese al formulario</p>
    </div>
  );
};

export { Politicas };
