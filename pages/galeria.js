import { Accordion } from "react-bootstrap";
import { PhotoSection } from "../components/KidsGallery";

export default function Galeria() {
  const images = {
    Niñasyniños: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños1.jpg",
        title: "Portada",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños2.jpg",
        title: "Benito Juarez Primer Grado",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños3.jpg",
        title: "Benito Juarez Sexto",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños4.jpg",
        title: "Chimalhuacan Basurero",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños5.jpg",
        title: "Derechos NNA",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños6.jpg",
        title: "Di No a la Violencia Primaria Benito Juarez",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños7.jpg",
        title: "Educación",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños8.jpg",
        title: "Entrega de utiles escolares",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños9.jpg",
        title: "Juanito Imágen 1",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños10.jpg",
        title: "Juanito Imágen 2",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños11.jpg",
        title: "Mi identidad",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños12.jpg",
        title: "Niñas y Niños",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños13.jpg",
        title: "Niñas y Niños",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños14.jpg",
        title: "Niñas y Niños",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños15.jpg",
        title: "Niñas y Niños",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños16.jpg",
        title: "Niñas y Niños",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños17.jpg",
        title: "No al Bullying Primaria Benito Juarez",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños18.jpg",
        title: "No al Bullying",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños19.jpg",
        title: "No a la violencia",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños20.jpg",
        title: "Paz para todos Primaria Benito Juárez",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños21.jpg",
        title: "Primaria Cuauhtémoc- Niña",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños22.jpg",
        title: "Primaria Cuauhtémoc Niño",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños23.jpg",
        title: "Primaria Niños Heroes",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños24.jpg",
        title: "Primaria VIcente Guerrero",
      },
    ],
    Mujeres: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Mujeres/Mujeres1.jpg",
        title: "Capacitación",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Mujeres/Mujeres2.jpg",
        title: "Comedores Comunitarios",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Mujeres/Mujeres3.jpg",
        title: "Mujeres Emprendedoras",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Mujeres/Mujeres4.jpg",
        title: "Niñas Oaxaca",
      },
    ],
    Adolescentes: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes1.jpg",
        title: "adolescentes1",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes2.jpg",
        title: "CBTIS 107 TV2",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes3.jpg",
        title: "CBTIS 107 TV4",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes4.jpg",
        title: "Esc. Sec. Tec. No. 97 TM 3er grado - 09-12-16",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes5.jpg",
        title: "Evento Nacional de prevención",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes6.jpg",
        title: "Evento Prevención Veracruz",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes7.jpg",
        title: "Sec. tec. 213",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Adolescentes/adolescentes8.jpg",
        title: "Secundaria técnica 97.",
      },
    ],
    Instituciones: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones1.jpg",
        title: "ABC Pacto Primera Infancia",
      },
    ],
    Instituciones: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones1.jpg",
        title: "ABC Pacto Primera Infancia",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones2.jpg",
        title: "Agenda 2030",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones3.jpg",
        title: "Bachilleres",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones4.jpg",
        title: "Cámara de Comercio",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones5.jpg",
        title: "CJM Hidalgo",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones6.jpg",
        title: "CJM Mujeres",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones7.jpg",
        title: "COMPREVNNA",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones8.jpg",
        title: "Congreso CDMX",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones9.jpg",
        title: "Congreso",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones10.jpg",
        title: "Delegación Cuahutemoc",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones11.jpg",
        title: "DIF Veracruz",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones12.jpg",
        title: "Instituciones",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones13.jpg",
        title: "INJUVE",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones14.jpg",
        title: "IQM Embarazo Adolescente",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones15.jpg",
        title: "IQM Qro",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones16.jpg",
        title: "IQM",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones17.jpg",
        title: "Observatorio Ciudadano CDMX",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones18.jpg",
        title: "OMS _ OPS",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones19.jpg",
        title: "Instituciones",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones20.jpg",
        title: "REDLAMYC Colombia",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones21.jpg",
        title: "Secretaría del Trabajo",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones22.jpg",
        title: "SIPINNA",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Instituciones/Instituciones20.jpg",
        title: "USAID",
      },
    ],
    Equipo: [
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo1.jpg",
        title: "Contruyendo ideas",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo2.jpg",
        title: "Trabajo de campo",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo3.jpg",
        title: "Facilitador",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo4.jpg",
        title: "Preescolar Ignacio Ramírez Facilitador",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo5.jpg",
        title: "Trabajo de campo mujeres",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo6.jpg",
        title: "Foro Agenda 2030",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo7.jpg",
        title: "Primaria Benito Juárez",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo8.jpg",
        title: "Facilitadores Benito Juárez",
      },
      {
        src: "/images/fotosXpoblacion/Fotos por población/Equipo/Equipo9.jpg",
        title: "Preescolar Carmen Ahuja",
      },
    ],
  };

  return (
    <div className="container">
      <div
        className="row mb-5 p-5"
        style={{ backgroundColor: "lavender", borderRadius: "50px" }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Niñas y Niños
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection
          images={images.Niñasyniños}
          title={images.Niñasyniños.title}
        />
      </div>
      <div
        className="row mb-5 p-5"
        style={{ backgroundColor: "lavender", borderRadius: "50px" }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Adolescentes
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection
          images={images.Adolescentes}
          title={images.Adolescentes.title}
        />
      </div>
      <div
        className="row mb-5 p-5"
        style={{ backgroundColor: "lavender", borderRadius: "50px" }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Mujeres
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images.Mujeres} title="title" />
      </div>
      <div
        className="row mb-5 p-5"
        style={{ backgroundColor: "lavender", borderRadius: "50px" }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Instituciones
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images.Instituciones} title="title" />
      </div>
      <div
        className="row mb-5 p-5"
        style={{ backgroundColor: "lavender", borderRadius: "50px" }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Equipo de Trabajo
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images.Equipo} title="title" />
      </div>
    </div>
  );
}
