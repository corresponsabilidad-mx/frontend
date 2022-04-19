import { PhotoSection } from "../components/KidsGallery";

export default function Galeria() {
  const images = [
    "/images/gallery/NINASYNINOS1.jpg",
    "/images/gallery/NINASYNINOS2.jpg",
    //AQUI SE PUEDEN AGREGAR LAS RUTAS DE NUEVAS FOTOS DE LA GALERIA DE NINAS Y NINOS
  ];
  const images2 = [
    "/images/gallery/ADOLESCENTES1.jpg",
    //AQUI SE PUEDEN AGREGAR LAS RUTAS DE NUEVAS FOTOS DE LA GALERIA DE ADOLESCENTES
  ];
  const images3 = [
    "/images/gallery/MUJERES1.jpg",
    "/images/gallery/MUJERES2.jpg",
    //AQUI SE PUEDEN AGREGAR LAS RUTAS DE NUEVAS FOTOS DE LA GALERIA DE ADOLESCENTES
  ];
  return (
    <div className="container">
      <div
        className="row mb-5 p-5"
        style={{
          backgroundColor: "lavender",
          borderRadius: "50px",
          marginTop: "150px",
        }}
      >
        <h2
          className="primary-color bg-transparent mb-2 text-start mt-3 p-2"
          style={{ fontFamily: "Montserrat" }}
        >
          Niñas y Niños
        </h2>
        <div className="line-deco mb-2"></div>
        <PhotoSection images={images} className="mb-5 bg-light p-5" />
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
        <PhotoSection images={images2} />
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
        <PhotoSection images={images3} />
      </div>
    </div>
  );
}
