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
      "/images/fotosXpoblacion/Fotos por población/Niñas Niños/Niñasyniños1.jpg",
      "Portada",
      ,
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
    </div>
  );
}
